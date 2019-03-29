import React from 'react';
import posed from 'react-pose';
import './ImageDiv.css';

const PopUp = posed.div({
    open:{
        x:'0%',
        delayChildren:360,
        staggerChildren:60,
    },
    closed:{x:'-100%',delay:360,

    }
});

const Item1 =posed.div({
    open:{x:0,opacity:1},
    closed:{x:100,opacity:0},
});
const Item2 =posed.div({
    open:{x:0,opacity:1},
    closed:{x:100,opacity:0},
});
class ImageDiv extends React.Component{
    constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render(){
        return(
            <div>
                <PopUp  className="PopUp" pose={this.props.isOpen?'open':'closed'}>
                    <Item1 className="item-1" ><div className="innerdiv"><img src={this.props.url1} alt="cute cat"></img></div></Item1>
                    <Item1 className="item-1" ><div className="innerdiv"><img src={this.props.url2} alt="cute cat"></img></div></Item1>
                    <Item1 className="item-1" ><div className="innerdiv"><img src={this.props.url3} alt="cute cat"></img></div></Item1>
                </PopUp>
                <PopUp className='PopUp' pose={this.props.isOpen?'open':'closed'}>
                    <Item2 className="item-2" ><div className="innerdiv"><img src={this.props.url4} alt="cute cat"></img></div></Item2>
                    <Item2 className="item-2" ><div className="innerdiv"><img src={this.props.url5} alt="cute cat"></img></div></Item2>
                    <Item2 className="item-2" ><div className="innerdiv"><img src={this.props.url6} alt="cute cat"></img></div></Item2>
                </PopUp>
            </div>
        );
    }
}

export default ImageDiv;