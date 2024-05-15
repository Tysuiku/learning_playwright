export let printAge = (age) => {
  console.log(age);
};

class CustomerDetails {
  /**
   * This method will print first name
   * @param {string} firstName
   */
  printFirstName(firstName) {
    console.log(firstName);
  }

  /**
   * This method will print the last name
   * @param {string} lastName
   */
  printLastName(lastName) {
    console.log(lastName);
  }
}

export let customerDetails = new CustomerDetails();
