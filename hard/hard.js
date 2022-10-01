var ppi = {
  firstName: "Carlos",
  mailingName: function () {
    return this.firstName + " ";
  },

  ssn: function () {
    const ssn = 222 - 22 - 2222;
    return ssn;
  },
};
console.log(ppi.mailingName());
console.log(ppi.ssn());
