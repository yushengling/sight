import React,{ Component } from 'react';
import * as styles from './LayoutFooter.less';
function LayoutFooter() {
  return (
    <footer className="layoutfooter">
      <p>
        <a className="layoutfooter-icon icon-github" href="https://github.com/xuya227939/corki-ui" target="_blank">
        </a>
      </p>
      <p>
        Copyright © 2019 Liu Jiang {/*<a className="layoutfooter-a" href="http://www.miitbeian.gov.cn/">备案号：湘ICP备18013456号</a>*/}
      </p>
    </footer>
  )
}

export default LayoutFooter