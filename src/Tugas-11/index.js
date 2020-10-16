import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      now: new Date(),
      isShow: true,
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start});
    }

    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentDidUpdate(){
    this.hideTimer();
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
        time: this.state.time - 1,
        now: new Date()
    });
  }

  hideTimer () {
    if (this.state.time === 0 && this.state.isShow) {
        this.componentWillUnmount();
        this.setState({
            isShow: false,
        });
    }
  }

  showTime() {
    const hour = this.state.now.getHours() < 10 ? '0'+this.state.now.getHours() : this.state.now.getHours();
    const minute = this.state.now.getMinutes() < 10 ? '0'+this.state.now.getMinutes() : this.state.now.getMinutes();;
    const second = this.state.now.getSeconds() < 10 ? '0'+this.state.now.getSeconds() : this.state.now.getSeconds();;
    const ampm = this.state.now.getHours() > 12 ? "PM" : "AM";

    var time = hour + ':' + minute + ':' + second + ' ' + ampm;

    return time;
  }


  render(){
      if (this.state.isShow) {
        return(
            <div className="timer">
                <h1>Sekarang jam : {this.showTime()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hitung mundur: {this.state.time}</h1>
            </div>
        )
      } else {
        return null
      }
  }
}

export default Timer