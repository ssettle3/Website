const getGreeting = () => [
  "Welcome to my interactive Terminal!",
  "I built this simple terminal interface so that you can find out a little bit about me in an interactive and creative way. There are various commands that you can type in to find out more!",
  "ex: skills, email, hobbies - or just type 'commands' to see a full list.",
  "If you need help - just type 'help' to see this message again.",
  "Enjoy! - Stephen"
];

export const CommandData = {
  loadingCommands: {
    ["ssh stephensettle --lock"]: {
      output: ""
    },
    ["**********"]: {
      output: getGreeting()
    }
  },
  userCommands: {
    help: {
      output: getGreeting()
    },
    clear: {},
    exit: {
      output: "Nice try! :-p"
    },
    email: {
      output: "ssettle3@gmail.com"
    },
    skills: {
      output:
        "JavaScript, React, Angular, Ruby, Elixir, C#, Kafka, Webpack, HTML, CSS"
    },
    phone: {
      output: "404-408-9767"
    },
    hobbies: {
      output: "Working out, Game Development with Unity, Playing drums, Movies"
    },
    whoami: {
      output:
        "My name is Stephen Settle. I am an Atanta native and went to school at Georgia Tech. Go Jackets!"
    },
    commands: {
      output:
        "clear, skills, email, help, whoami, hobbies, phone, work, github, linkedin"
    },
    work: {
      output: "Senior Software Engineer @ SalesLoft (www.salesloft.com)"
    },
    github: {
      output: "https://github.com/ssettle3"
    },
    linkedin: {
      output: "https://www.linkedin.com/in/ssettle/"
    }
  }
};
