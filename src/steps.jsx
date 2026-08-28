import Dudu from "./components/Dudu.jsx";

// Each entry is one screen of the stepper.
// Add new steps here as the story grows — the Stepper handles the rest.

export const steps = [
  {
    id: "hello",
    content: (
      <>
        <Dudu />
        <p className="kicker">hey you zhu 👀</p>
        <h1 className="headline">Hello Mindy!</h1>
        <p className="subhead">Swipe right (or tap Next) — I made you something!</p>
      </>
    ),
  },
];
