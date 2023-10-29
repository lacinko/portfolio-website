import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeOf, object, string } from "zod";
import { cn } from "../utils/utils";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const contactFormSchema = object({
  name: string()
    .min(3, { message: "Contact name can't be shorter than 3 characters" })
    .max(50, { message: "Contact name can't be longer than 50 characters" }),
  email: string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  subject: string()
    .min(3, {
      message: "Subject can't be shorter than 3 characters",
    })
    .max(50, {
      message: "Subject can't be longer than 50 characters",
    }),
  message: string()
    .min(3, { message: "Sure you don't want to send empty message" })
    .max(500, {
      message:
        "I know that you have a lot on your mind, but you have to be more concise",
    }),
});

type TContactForm = TypeOf<typeof contactFormSchema>;

function ContactForm() {
  const defaultValues: TContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TContactForm>({
    defaultValues,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitHandler: SubmitHandler<TContactForm> = async (
    values: TContactForm,
  ) => {
    try {
      const response = await emailjs.send(
        "service_hr1uose",
        "template_smo69ao",
        values,
        "tYWLXwrhQLgt56VO4",
      );

      if (response.status === 200) {
        reset(defaultValues);
        toast.success("Thanks for the email", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
          className: "bg-slate-800 text-slate-300 font-mono",
        });
      } else {
        toast.error("Ouch, something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
          className: "bg-slate-800 text-slate-300 font-mono",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formValues: {
    id: string;
    name: "name" | "email" | "subject" | "message";
    description?: string;
    type: string;
    placeholder: string;
  }[] = [
    {
      id: "name",
      name: "name",
      description: "Your name",
      type: "text",
      placeholder: "Name",
    },
    {
      id: "email",
      name: "email",
      description: "Your email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: "subject",
      name: "subject",
      description: "Subject of your message",
      type: "text",
      placeholder: "Subject",
    },
    {
      id: "message",
      name: "message",
      description: "Your message",
      type: "textarea",
      placeholder: "Message",
    },
  ];

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      {formValues.map((input) => {
        let inputField;
        if (input.type === "textarea") {
          inputField = (
            <textarea
              id={input.id}
              key={input.id}
              placeholder={input.placeholder}
              aria-invalid={errors[input.name] ? "true" : "false"}
              aria-describedby={
                errors[input.name]
                  ? `${input.id} - ${errors[input.name]?.message}`
                  : input.description
              }
              className={cn(
                !!errors[input.name] && "border border-red-500",
                "h-32 w-full rounded-md bg-slate-800 p-2",
              )}
              {...register(input.name)}
            />
          );
        } else {
          inputField = (
            <input
              id={input.id}
              key={input.id}
              type={input.type}
              placeholder={input.placeholder}
              aria-invalid={errors[input.name] ? "true" : "false"}
              aria-describedby={
                errors[input.name]
                  ? `${input.id} - ${errors[input.name]?.message}`
                  : input.description
              }
              className={cn(
                !!errors[input.name] && "border border-red-500",
                "w-full rounded-md bg-slate-800 p-2",
              )}
              {...register(input.name)}
            />
          );
        }

        return (
          <div key={input.id}>
            {inputField}
            {errors[input.name] && (
              <p role="alert" className="mt-2 text-xs text-red-500">
                {" "}
                {errors[input.name]?.message}
              </p>
            )}
          </div>
        );
      })}

      <div className="mt-3 flex w-full md:justify-end">
        <button
          type="submit"
          className="w-full rounded-md border-2 border-indigo-500 px-2 py-1 text-center hover:bg-indigo-500 md:w-1/3"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
