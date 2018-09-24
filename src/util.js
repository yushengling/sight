const userTips = {
  userRedu: undefined,
  clear: undefined,
  history: undefined,
  dispatch: undefined,
  alertMessage: function() {
    const { code } = this.userRedu;
    if(code === 400) {
      this.clear(this.dispatch);
    } else if(code === 200) {
      setTimeout(() => {
        this.history.push('/');
      }, 1000);
      this.clear(this.dispatch);
    }
  }
}
export { userTips };