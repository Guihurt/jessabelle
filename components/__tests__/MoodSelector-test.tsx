import * as React from "react";
import renderer from "react-test-renderer";
import MoodSelector from "../MoodSelector/MoodSelector";

describe("<MoodSelector />", () => {
  const defaultSelector = renderer.create(<MoodSelector />).toJSON();
  it("renders, default props", () => {
    expect(defaultSelector).toMatchSnapshot();
  });
});
