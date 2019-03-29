/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './LayoutFooter.less';

export default function LayoutFooter() {
    return (
        <footer className="layoutfooter">
            <p>
                <a className="layoutfooter-icon icon-github" href="https://github.com/xuya227939/corki-ui" target="_blank" />
            </p>
            <p>
                Copyright © 2019 Liu Jiang 
                {/*<a className="layoutfooter-a" href="http://www.miitbeian.gov.cn/">备案号：湘ICP备18013456号</a>*/}
            </p>
        </footer>
    );
}
