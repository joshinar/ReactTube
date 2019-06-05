import React, { Component } from "react";
import { Consumer } from "../Context";

class Index extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return value.videos.map(video => {
            return (
              <React.Fragment>
                <div className="col-md-4 mx-auto mt-5">
                  {video.length < 0 ? (
                    <img src="https://gph.is/2gEPAHj" />
                  ) : (
                    <iframe
                      title={`${video.id.kind}`}
                      width="300"
                      height="200"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      allowFullScreen
                      style={{
                        border: "10px solid #333"
                      }}
                    />
                  )}
                </div>
              </React.Fragment>
            );
          });
        }}
      </Consumer>
    );
  }
}

export default Index;
