import React, { Component } from "react";

export default class Comments extends Component {
  state = {
    comment: [
      {
        username: "",
        img: "",
        post: ""
      }
    ]
  };
  handleClick = () => {
    this.setState({
      comment: [
        ...this.state.comment,
        {
          username: this.props.name,
          img: this.props.img,
          post: this.props.value
        }
      ]
    });
  };
  render() {
    console.log(this.state);
    let response = this.state.comment.map((comment, index) => {
      return (
        <li className="media" key={index}>
          <a href="#" className="pull-left">
            <img src={comment.img} alt="" className="img-circle" />
          </a>
          <div className="media-body">
            <span className="text-muted pull-right">
              <small className="text-muted">30 min ago</small>
            </span>
            <strong className="text-success">{comment.username}</strong>
            <p>{comment.post}</p>
          </div>
        </li>
      );
    });

    return (
      <div>
        <div className="row bootstrap snippets">
          <div className="col-md-6 col-md-offset-2 col-sm-12">
            <div className="comment-wrapper">
              <div className="panel panel-info">
                <div className="panel-heading">Comment panel</div>
                <div className="panel-body">
                  <textarea
                    className="form-control"
                    placeholder="write a comment..."
                    rows="3"
                    onChange={this.props.handleChange}
                  />
                  <br />
                  <button
                    type="button"
                    className="btn btn-info pull-right"
                    onClick={this.handleClick}
                  >
                    Post
                  </button>
                  <div className="clearfix" />
                  <hr />
                  <ul className="media-list">
                    <li className="media">
                      <a href="#" className="pull-left">
                        <img
                          src="https://bootdey.com/img/Content/user_2.jpg"
                          alt=""
                          className="img-circle"
                        />
                      </a>
                      <div className="media-body">
                        <span className="text-muted pull-right">
                          <small className="text-muted">30 min ago</small>
                        </span>
                        <strong className="text-success">
                          @LaurenceCorreil
                        </strong>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor <a href="#">#ipsumdolor </a>
                          adipiscing elit.
                        </p>
                      </div>
                    </li>
                    <li className="media">
                      <a href="#" className="pull-left">
                        <img
                          src="https://bootdey.com/img/Content/user_3.jpg"
                          alt=""
                          className="img-circle"
                        />
                      </a>
                      <div className="media-body">
                        <span className="text-muted pull-right">
                          <small className="text-muted">30 min ago</small>
                        </span>
                        <strong className="text-success">@JohnNida</strong>
                        <p>
                          Lorem ipsum dolor <a href="#">#sitamet</a> sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </li>
                    {response}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
