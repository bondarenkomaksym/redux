import React from "react";
import Header from "./Header";
import { themes, ThemeContext } from "./theme-context";

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001'
    },
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark
      ? themes.light
      : themes.dark;

    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>

          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;