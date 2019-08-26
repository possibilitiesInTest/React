import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    // console.log("vR in constructor", this.videoRef);
    // console.log("streams in constructor", this.props.stream);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    console.log("strem did Mount", this.props.stream);
    this.player.attachMediaElement(this.videoRef.current);
    this.buildPlayer();
  }

  componentDidUpdate() {
    const { id } = this.props.match.params;
    // console.log("vR in did update", this.videoRef);
    // console.log("strms did-Update", this.props.stream);
    this.props.fetchStream(id);

    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  // Solution # 2: attach promise
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.fetchStream(id).then(() => {
  //     this.player = flv.createPlayer({
  //       type: "flv",
  //       url: `http://localhost:8000/live/${id}.flv`
  //     });
  //     this.player.attachMediaElement(this.videoRef.current);
  //     this.player.load();
  //   });
  // }

  // solution # 3: async await
  // async componentDidMount() {
  //   const { id } = this.props.match.params;
  //   await this.props.fetchStream(id)

  //     this.player = flv.createPlayer({
  //       type: 'flv',
  //       url: `http://localhost:8000/live/${id}.flv`
  //     });
  //     this.player.attachMediaElement(this.videoRef.current);
  //     this.player.load();
  //   });

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });

    // console.log("vR buildPlayer", this.videoRef);
    // console.log("str buildPlayer", this.props.stream);

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

    // function attachRef() {
    //   return new Promise(resolve => {
    //     this.player.attachMediaElement(this.videoRef.current);
    //   });
    // }

    // async function loadPlayer() {
    //   const response = await attachRef();
    //   console.log(response);
    //   this.player.load();
    // }
    // loadPlayer();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
        {/* {console.log("strm render", this.props.stream)}
        {console.log("vR render", this.videoRef)} */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mstp - stream", state.streams[ownProps.match.params.id]);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
