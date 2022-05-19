import React from "react";

export type Note = {
  title: string;
  categories: NoteCategory[];
  content: React.ReactNode;
};

export type NoteCategory =
  | "meta"
  | "programming languages"
  | "web development"
  | "education"
  | "policy"
  | "lifestyle"
  | "sports"
  | "software";

export const notes: Note[] = [
  {
    title: "Purpose",
    categories: ["meta"],
    content: (
      <>
        <p>
          I already have a <a href="https://medium.com/@billwohlers">Medium</a>{" "}
          for expressing my opinions more completely, which I recommend you
          check out. But I wanted another way to express some of my thoughts
          more concisely, so I've added this page to my site.
        </p>
      </>
    ),
  },
  {
    title: "Why I Like TypeScript",
    categories: ["programming languages", "software"],
    content: (
      <>
        <p className="text-sm italic">
          I've written a&nbsp;
          <a href="https://betterprogramming.pub/the-bad-reasons-people-avoid-typescript-and-the-better-reasons-why-they-shouldnt-86f8d98534de">
            Medium article
          </a>{" "}
          on this expressing my opinion more completely. This note is an
          (updated) summary of those thoughts.
        </p>
        <p>
          In fall 2021, I took a course at Northeastern called Software
          Development. We were tasked with coding a project in a language of our
          choice, and naturally, I chose TypeScript. Our professor promised us
          that we would all hate our chosen language by December. Though I
          definitely uncovered some ugly quirks of TypeScript along the ride, my
          experience in the class only solidified my belief that it's a great
          language.
        </p>
        <p>
          Overall, JS is an incredibly versatile and expressive language with a
          rich ecosystem. Javascript allows you to embrace an object-oriented
          style where it makes sense, and a functional style elsewhere.
          Furthermore, while data structures in JS often come with confusing
          quirks, it gets the big idea right, and integrates seamlessly with
          JSON.
        </p>
        <p>
          Javascript lacks two important things: a good standard library and a
          good type system. TypeScript completely addresses the latter. (If you
          haven't looked much into the capabilities of TypeScript, do it.) The
          lack of a good standard library &mdash; and standardization in general
          &mdash; is the only big downside of using JS/TS, but Node and npm more
          than compensate for this deficiency.
        </p>
      </>
    ),
  },
  {
    title: "Why I Like React",
    categories: ["software", "web development"],
    content: (
      <>
        <p className="text-sm italic">
          I've also written a (controversial)&nbsp;
          <a href="https://javascript.plainenglish.io/why-i-finally-chose-react-over-vue-f090cb0e097a">
            Medium article
          </a>{" "}
          on this expressing my opinion more completely. This note is an
          (updated) summary of those thoughts.
        </p>
        <p>
          It's difficult to pinpoint exactly what about React makes it feel as
          modern as it does. Its modular approach to design enabled by JSX looks
          clean and just works.
        </p>
        <p>
          TypeScript compatibility is another important feature. In other
          frameworks, it feels like you're hacking it to make TS work, whereas
          React feels like it was designed with TypeScript in mind. Ultimately,
          for large, complex projects, I can't think of many major improvements
          that could be made to React.
        </p>
        <p>
          That being said, Vue (and other SPA frameworks) have their use cases.
          Vue is better for quick prototyping. It's also the more accessible of
          the two frameworks. In fact, when I originally started creating web
          clients, I used Vue exclusively, and it took me a year to admit that I
          liked React better.
        </p>
        <p>
          I've also been eyeing Svelte since it's gained popularity, and I plan
          to eventually try it out. But so far I see no obvious reason for me to
          prefer it to React.
        </p>
      </>
    ),
  },
  {
    title: "Higher Ed Needs Reform",
    categories: ["education", "policy"],
    content: (
      <>
        <p>
          Many problems plague higher ed &mdash; skyrocketing tuition costs,
          egregiously (maybe even criminally) high interest rates on loans, and
          students pursuing degrees that are hardly worth the paper they're
          printed on &mdash; just to name a few.
        </p>
        <p>
          All these issues have led to widespread inaccessibility of higher
          education, and more importantly, of employment. They're also
          responsible for the ridiculous amount of student debt that American
          students owe.
        </p>
        <p>
          The solution is not blanket forgiveness of student debt. While I have
          sympathy for those who owe humongous sums of money, absolving people
          of their responsibility to pay that money back just moves that
          enormous financial burden to taxpayers, many of whom didn't choose to
          get an expensive degree and certainly aren't benefiting from it.
        </p>
        <p>
          Instead, the problem must be attacked at the root &mdash; reducing
          expensive administrative bloat at universities, encouraging high
          schoolers to opt for trade schools or pursue STEM degrees, and ending
          the societal stigma against middle class workers without college
          degrees.
        </p>
      </>
    ),
  },
  {
    title: "Mac vs Windows",
    categories: ["software"],
    content: (
      <>
        <p>
          I grew up using Windows exclusively. I hadn't touched a Mac until I
          was given one as a work laptop for a co-op in spring 2020. Once I
          adjusted to OSX, I finally understood the appeal of Macs, particularly
          for developers. I bought a MacBook in summer 2021, and so far, I
          haven't looked back.
        </p>
        <p>
          When it comes to work and productivity, Mac is just better than
          Windows. The Unix-based terminal is more familiar than DOS-based
          terminals. The trackpad also feels more natural than Windows'
          multitasking flow.
        </p>
        <p>
          Finally, there's no denying that, as expensive as they are, Apple
          product quality is top of the line. They look and feel expensive.
          Whenever I boot up my old Windows laptop, it feels like a cheap piece
          of plastic.
        </p>
        <p>
          But the world of OSX is not all rainbows and sunshine. For one, it's
          far more buggy than Windows. My Mac inexplicably crashes multiple
          times a month. Sometimes simple operations will cause apps to freeze
          up or bug out.
        </p>
        <p>
          I also hate Finder. Windows' file explorer is far more intuitive to
          use in my experience. Finder is so bad that I often try to do
          something in it and end up just using the Terminal instead.
        </p>
      </>
    ),
  },
  {
    title: "Sound is Everything",
    categories: ["lifestyle"],
    content: (
      <>
        <p>
          I've never understood people who don't invest a good amount of money
          into their speakers. It's worth it every time.
        </p>
      </>
    ),
  },
  // Future ideas: SQL vs NoSQL
];

export const allCategories = Array.from(
  new Set(notes.flatMap((note) => note.categories))
);
