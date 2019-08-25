import React, { Component } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import { CommandData } from "../Data";

const USER_COMMANDS = Object.keys(CommandData.userCommands);

const TerminalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding-top: 80px;
  font-family: "monaco";

  .Typewriter__wrapper {
    color: lightgreen;
    margin-left: 10px;
  }
`;

const TerminalBox = styled.div`
  height: 500px;
  max-height: 500px;
  flex-direction: column-reverse;
  overflow: scroll;
  width: 900px;
  background: black;
  border-radius: 2px;
  padding: 10px 10px 20px 10px;
`;

const PromptInput = styled.input`
  display: ${props => (props.authenticated ? "visible" : "hidden")};
  background: black;
  pointer-events: none;
  border: none;
  color: lightgreen;
  width: 100%;
  font-size: 12px;
  margin-left: 10px;
  font-family: "monaco";

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

const Prompt = styled.div`
  display: flex;
  flex-direction: row;
`;

const PromptIcon = styled.span`
  color: lightgreen;
`;

const TerminalHistory = styled.div``;

const HistoryItem = styled.div`
  color: lightgreen;

  .terminal-greeting {
    text-align: center;
    margin: 15px 0;
  }
`;

const HisoryItemCommand = styled.span``;
const HistoryItemOutput = styled.div``;
const HistoryOutputWrapper = styled.div``;

const PWD = "**********";

export class Terminal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commandLineText: "",
      history: [],
      loading: true,
      prompt: ">"
    };
  }

  commandOutput = command => CommandData.userCommands[command].output;

  throwCommandlError = command => {
    const history = this.state.history;

    if (command.includes("cd")) {
      history.push({
        command: command,
        prompt: "stephensettle>",
        output: `Unauthorizaed: The current session has been locked to the current directory.`
      });
    } else {
      history.push({
        command: command,
        prompt: "stephensettle>",
        output: `Error: ${command} is not a valid command`
      });
    }

    this.setState({
      commandLineText: "",
      history: history
    });
  };

  handleCommand = command => {
    if (command === "clear") {
      return this.clearHistory();
    }

    this.addCommandToHistory(command);
  };

  clearHistory = () => {
    this.setState({
      history: [],
      commandLineText: ""
    });
  };

  getPrompt = command => {
    switch (command) {
      case "ssh stephensettle --lock":
        return "pwd:";
      default:
        return "stephensettle>";
    }
  };

  addLoadingCommandToHistory = command => {
    const history = this.state.history;
    const prompt = this.getPrompt(command);
    const authenticated = command.includes(PWD);

    history.push({
      command: command,
      output: CommandData.loadingCommands[command].output,
      prompt: command.includes("ssh") ? ">" : "pwd:",
      class: command.includes("ssh") ? null : "terminal-greeting"
    });

    this.setState(
      {
        history: history,
        commandLineText: "",
        prompt: prompt,
        loading: false,
        authenticated: authenticated
      },
      () => this.focusOnPrompt()
    );
  };

  addCommandToHistory = command => {
    const history = this.state.history;

    history.push({
      command: command,
      output: CommandData.userCommands[command].output,
      prompt: "stephensettle>",
      class: command === "help" ? "terminal-greeting" : null
    });

    this.setState({
      history: history,
      commandLineText: ""
    });
  };

  onChange = event => {
    if (this.state.loading) {
      return;
    }

    const history = this.state.history;
    const command = event.target.value.trim();

    if (event.keyCode === 13) {
      if (!Boolean(command.length)) {
        history.push({ command: "", output: "", prompt: this.getPrompt() });
        return this.setState({ history: history });
      }

      if (!USER_COMMANDS.includes(command)) {
        return this.throwCommandlError(command);
      } else {
        return this.handleCommand(command);
      }
    }

    this.setState({
      commandLineText: event.target.value
    });
  };

  focusOnPrompt = () => {
    const input = document.querySelector("#command-prompt");

    if (input) {
      input.focus();
      input.scrollIntoView();
    }
  };

  render() {
    this.focusOnPrompt();

    return (
      <TerminalWrapper onClick={this.focusOnPrompt}>
        <TerminalBox>
          {this.state.history.length > 0 && (
            <TerminalHistory>
              {this.state.history.map((h, index) => (
                <HistoryItem key={index}>
                  <PromptIcon> {h.prompt} </PromptIcon>
                  <HisoryItemCommand>{h.command}</HisoryItemCommand>
                  <HistoryOutputWrapper className={h.class}>
                    {Array.isArray(h.output) &&
                      h.output.map((out, index) => {
                        return (
                          <HistoryItemOutput key={index} t>
                            {out}
                          </HistoryItemOutput>
                        );
                      })}
                    {!Array.isArray(h.output) && (
                      <HistoryItemOutput>{h.output}</HistoryItemOutput>
                    )}
                  </HistoryOutputWrapper>
                </HistoryItem>
              ))}
            </TerminalHistory>
          )}
          <Prompt>
            <PromptIcon> {this.state.prompt} </PromptIcon>
            {this.state.loading && (
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString("ssh stephensettle")
                    .callFunction(() => {
                      this.addLoadingCommandToHistory(
                        "ssh stephensettle --lock"
                      );
                    })
                    .start();
                }}
              />
            )}
            {this.state.prompt === "pwd:" && (
              <Typewriter
                options={{ cursorClassName: "typewriter-cursor" }}
                onInit={typewriter => {
                  typewriter
                    .typeString(PWD)
                    .callFunction(() => {
                      this.addLoadingCommandToHistory(PWD);
                    })
                    .start();
                }}
              />
            )}
            {this.state.authenticated && (
              <PromptInput
                id="command-prompt"
                autocomplete="lksdjgkhjdfjkg"
                spellCheck="false"
                type="text"
                authenticated={this.state.authenticated}
                value={this.state.commandLineText}
                onKeyDown={this.onChange}
                onChange={this.onChange}
              />
            )}
          </Prompt>
        </TerminalBox>
      </TerminalWrapper>
    );
  }
}
