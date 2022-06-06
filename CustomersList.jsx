import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "job",
        phone: "456-678",
        address: { city: "Chicago" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Micheal",
        phone: "678-789",
        address: { city: "UK" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Mecheal",
        phone: "789-890",
        address: { city: "US" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Mecheal",
        phone: null,
        address: { city: "Canada" },
        photo: "https://picsum.photos/id/1014/60",
      },
      {
        id: 6,
        name: "Mecheal",
        phone: "901-123",
        address: { city: "New jersy" },
        photo: "https://picsum.photos/id/1015/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick="{this.onRefreshClick}">
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg bg-waring p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                change picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //Executes when the user clicks on "ChangePicture" button in the grid
  //Recives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //get existing customer
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1016/60";

    //Update "Customer"array in the state
    this.setState({ customers: custArr });
  };
}
