function ContactForm() {
  return (
    <form className="flex flex-col gap-2">
      <input type="text" placeholder="Name" className="bg-slate-800 p-2" />
      <input type="email" placeholder="Email" className="bg-slate-800 p-2" />
      <input type="text" placeholder="Subject" className="bg-slate-800 p-2" />
      <textarea placeholder="Message" className="h-32  bg-slate-800 p-2" />
      <button
        type="submit"
        className="rounded-md border-2 border-indigo-500 px-2 py-1 text-center hover:bg-indigo-500"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
