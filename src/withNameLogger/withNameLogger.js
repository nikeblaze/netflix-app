//Higher Order Component

import { render } from "@testing-library/react";
import React from "react";

const withLogger = (MagazineList) => {
  class NewComponent extends React.Component {
    state = {
      isMounted: false,
      posts: [],
    };

    componentDidMount(posts) {
      this.setState({
        isMounted: true,
        posts,
      });
    }

    render() {
      if (this.state.isMounted) {
        console.log(withLogger.name);
      }

      return (
        <div>
          <MagazineList posts={this.state.posts} />
        </div>
      );
    }
  }
  return NewComponent;
};

export default withLogger;
