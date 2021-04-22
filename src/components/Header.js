import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions';
import { AppBar,Toolbar } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import RoomIcon from '@material-ui/icons/Room';
import InputAdornment from '@material-ui/core/InputAdornment';

class Header extends React.Component {
    componentDidMount(){
        this.props.fetchLocations();
    }
    state = {
        open: false
    };
    handleOpen=()=> {
        this.setState({ open: true });
    }
    handleClose=()=> {
        this.setState({ open: false });
    }
    renderList(){
        return (
            <div style={{ backgroundColor: 'white',position:'absolute',bottom:'0',height:'600px' }}>
                <CloseIcon style={{ float: 'right'}} onClick={this.handleClose}/>
                <h2 style={{ margin: '16px'}}>Cek makanan yang tersedia di lokasi kamu!</h2>
                <div style={{ textAlign: 'center',marginBottom:'24px'}}>
                    <TextField variant="outlined" 
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <RoomIcon style={{ color: '#f9234a' }}/>
                            </InputAdornment>
                        ),
                    }}/>
                </div>
                {this.props.locations.map(item => 
                    <div key={item.id} style={{ display: 'flex', margin:'16px' }}>
                        <div><RoomIcon style={{ color: '#6e7679' }}/></div>
                        <div>
                        <div>{item.name}</div>
                        <div>{item.Address}</div>
                        </div>
                    </div>
                )}
            </div>  
        )
    }
    render(){
        return (
            <AppBar style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <ArrowBackIcon style={{ color: 'black' }} />
                    <div style={{ marginLeft:'8px' }}>
                        <span style={{ display: 'block',fontSize:'12px', color: 'black' }}>Alamat Pengantaran</span>
                        <span style={{ fontSize:'16px', color: 'black' }}>Tokopedia Tower</span>
                    </div>
                    <KeyboardArrowDownIcon onClick={this.handleOpen} style={{ color: '#f9234a', marginTop:'12px' }}/>
                </Toolbar>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >{this.renderList()}</Modal>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        locations: Object.values(state.locations),
    };
};
export default connect(mapStateToProps,{fetchLocations})(Header);