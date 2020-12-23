import React, { Component } from "react";
import "./MagazineList.css";

class MagazineList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    async function getMag() {
      const response = await fetch(
        "https://www.ourdaily.co/explore/api/magazines"
      );

      const magData = await response.json();
      return magData;
    }
    getMag().then((data) => {
      //   const magItem = data.data.Regional;
      this.setState({ posts: data.data.Regional });
      //   console.log(magItem);
      console.log(this.state.posts);
    });
  }

  render() {
    let month = new Date().toLocaleString("default", { month: "long" });
    console.log(month);

    const posts = this.state.posts.map((post) => (
      <div>
        <img src={post.heroImage}></img>
        <div className="mag-info">
          <h2>
            {post.month} {post.year}
          </h2>
          <a href={post.file} download>
            Click to Download
          </a>
        </div>
      </div>
    ));

    // let output = [];
    // magItem.forEach((item) => {
    //   output += `
    //         <img src =${item.heroImage}>
    //         `;
    // });
    // return output;

    return <div className="mag-cover">{posts}</div>;
  }
}

export default MagazineList;
