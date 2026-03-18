import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vxtra Health — StartEngine Profile Plan",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StartEnginePage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            nav, footer { display: none !important; }
            body { overflow: hidden; }
          `,
        }}
      />
      <iframe
        src="/startengine-profile-plan.html"
        title="Vxtra Health — StartEngine Profile Plan"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
