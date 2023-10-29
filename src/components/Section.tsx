import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import Skeleton from "./Skeleton";

type SectionProps = {
  children: React.ReactNode;
  heading: string;
  id: string;
};

function Section({ children, heading, id }: SectionProps) {
  function logErrorToService(error, info) {
    console.error("Caught an error:", error, info);
  }

  return (
    <section id={id} className="-mt-10 pt-24">
      <h2 className="pb-4 text-xl font-semibold text-indigo-500">
        &lt;{heading}&gt;
      </h2>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={logErrorToService}
      >
        {/*I will built CV API which will deliver data to the components.*/}
        <Suspense fallback={<Skeleton />}>{children}</Suspense>
      </ErrorBoundary>
      <h2 className="pt-4 text-xl font-semibold text-indigo-500">
        &lt;/{heading}&gt;
      </h2>
    </section>
  );
}

export default Section;
