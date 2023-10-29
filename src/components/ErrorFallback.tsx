type ErrorFallbackProps = {
  error: Error;
};

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div role="alert" className="bg-slate-800 p-5">
      <p className="text-slate-300">Something went wrong</p>
      <pre className="text-red-500">{error.message}</pre>
    </div>
  );
}

export default ErrorFallback;
