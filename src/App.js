import React from "react";
import "./styles.css";

export const App = () => <StateOfMatter />;

const MatterContext = React.createContext({});
const MatterProvider = MatterContext.Provider;
const MatterConsumer = MatterContext.Consumer;

class StateOfMatter extends React.Component {
  state = {
    element: "Oxygen"
  };

  render() {
    return (
      <div className="stateOfMatter">
        <MatterProvider value={this.state.element}>
          <Solid />
        </MatterProvider>
      </div>
    );
  }
}

const Solid = () => {
  return <Liquid />;
};

const Liquid = () => {
  return <Gas />;
};

const Gas = () => {
  return <Plasma />;
};

const Plasma = () => {
  return <MatterConsumer>{context => <p>{context}</p>}</MatterConsumer>;
};

export default App;