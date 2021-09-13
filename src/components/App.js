import React, { Component } from "react";
import './app.css';
import Web3 from "web3";

class App extends Component {
    async componentWillMount() {
        this.loadWeb3(); 
        this.loadBlockchainData();
    }
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
        }
    }
    async loadBlockchainData() {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });
        console.log(accounts[0]);

        const balance = await web3.eth.getBalance(accounts[0]);
        this.setState({ balance: (balance)});
        console.log(balance);

    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            balance: '',
        }

    }

    render() {
        return ( 
            <div>
                <nav class="main-menu-wrap global-head__nav">
			<div id="nav__side-drawer-button" class="global-head__nav__side-drawer__button hidden-lg-up">
				<button
					class="global-head__nav__side-drawer__button__button"
					type="button"
					aria-label="Toggle navigation menu"
				>
                    <img
						src="https://www.playnow.com/resources/images/icons/bars-solid.svg?v=1"
						width="131"
						height="150"
						class="global-head__nav__side-drawer__hamburger"
						alt=""
					></img>
                </button>
            </div>
            <div id="logo" class="global-head__logo"><a id="nav-home" href="/">WinnToken</a></div>
                </nav>
            </div>
        );
    }
}

export default App;