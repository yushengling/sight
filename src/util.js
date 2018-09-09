import { message } from 'antd';
const tips = {
  userRedu: undefined,
  clear: undefined,
  history: undefined,
  dispatch: undefined,
  page: undefined,
  handleCancel: undefined,
  alertMessage: function() {
    message.config({
      top: 24,
      duration: 1,
      maxCount: 3,
    });
    const { code, message, isgo } = this.userRedu;
    if(code === 400) {
      message.error(message);
      this.clear(this.dispatch);
    } else if(code === 200) {
      message.success(message);
      if(!isgo) {
        setTimeout(() => {
          if(this.page == 'edit') {
            this.handleCancel();
          } else {
            this.history.push('/');
          }
        },1100);
      }
      this.clear(this.dispatch);
    }
  }
}
export { tips };