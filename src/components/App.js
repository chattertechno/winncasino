import React, { Component } from "react";
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
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.winntoken.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           Winn Casino
          </a>
          <ul class="nav navbar-nav navbar-right">
      <li>
          <a href="#"><span ></span>{this.state.account}</a></li>
    </ul>
        </nav>
            </div>
        );
    }
}

export default App;