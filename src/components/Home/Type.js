import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Salesforce Developer",
          "Web Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 40
      }}
    />
  );
}

export default Type;
