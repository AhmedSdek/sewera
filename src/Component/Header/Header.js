import React from 'react'
import img from '../IMG-20240204-WA0007.jpg'
import { Card } from 'react-bootstrap'
function Header() {

    return (
        <div id='header' className='header'>
            <div className='blur'>
            </div>
            <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={img} alt='' />
            <div className='header-text'>
                <p>
                    صدقة جارية
                </p>
                <p>
                    اللهم اجعل ثواب هذه الأذكار وقراءة القرآن للمرحوم
                </p>
                <h2 style={{ fontSize: '40px', backgroundColor: '#00000082', padding: '10px ', margin: '0', borderRadius: '15px' }}>
                    مجدى عبد الفتاح سيد صويرة
                </h2>
                <p style={{ margin: '20px 0' }}>
                    إنا لله وإنا إليه راجعون
                    لا حول ولا قوة إلّا باللّه العلي العظيم
                    إنَّ لله ما أخذ، وله ما أعطى، وكلٌّ عنده بأجلٍ مُسمّى، فلتصبر ولتحتسب
                </p>
            </div>

        </div >
    )
}

export default Header