import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import img from '../quran_PNG34.png'
function ApiSection() {
    const [data, setData] = useState([]);
    const [fathaName, setFathaName] = useState('');
    const [ysenName, setysenName] = useState('');
    const [kahfName, setKahfName] = useState('');
    const [waqName, setWaqName] = useState('');
    const [dokhanName, setDokhanName] = useState('');
    const [malkName, setMalkName] = useState('');

    const [f, setF] = useState([]);
    const [y, setY] = useState([]);
    const [k, setK] = useState([]);
    const [w, setW] = useState([]);
    const [d, setD] = useState([]);
    const [m, setM] = useState([]);

    const fatha = [];
    const ysen = [];
    const kahf = [];
    const waq = [];
    const dokhan = [];
    const malk = [];

    // get all data 
    useEffect(() => {
        try {
            axios.get('https://api.alquran.cloud/v1/quran/ar.alafasy').then((data) => setData(data.data.data.surahs)
            );
        } catch (err) {
            console.log(err)
        }
    }, [])


    // get fatha 
    function handelFatha() {
        setFathaName(data[0].name);
        for (let i = 1; i < data[0].ayahs.length; i++) {
            fatha.push(data[0].ayahs[i])
        }
        setF(fatha)
    }
    // get ysen 
    function handelYsen() {
        setysenName(data[35].name);
        for (let i = 0; i < data[35].ayahs.length; i++) {
            ysen.push(data[35].ayahs[i])
        }
        setY(ysen)
    }
    // get kahf
    function handelKahf() {
        setKahfName(data[17].name);
        for (let i = 0; i < data[17].ayahs.length; i++) {
            kahf.push(data[17].ayahs[i])
        }
        setK(kahf)
    }
    // get waqeaa
    function handelWaq() {
        setWaqName(data[55].name);
        for (let i = 0; i < data[55].ayahs.length; i++) {
            waq.push(data[55].ayahs[i])
        }
        setW(waq)
    }
    // get dokhan
    function handelDokhan() {
        setDokhanName(data[43].name);
        for (let i = 0; i < data[43].ayahs.length; i++) {
            dokhan.push(data[43].ayahs[i])
        }
        setD(dokhan)
    }
    // get dokhan
    function handelMalk() {
        setMalkName(data[66].name);
        for (let i = 0; i < data[66].ayahs.length; i++) {
            malk.push(data[66].ayahs[i])
        }
        setM(malk)
    }
    let soraDiv = document.getElementById('fathasora');
    let ysensora = document.getElementById('ysensora');
    let kahfsora = document.getElementById('kahfsora');
    let waqsora = document.getElementById('waqsora');
    let dokhansora = document.getElementById('dokhansora');
    let malksora = document.getElementById('malksora');




    // ftha 
    function handelfathastyle() {
        soraDiv.style.display = 'block';
        document.body.style.overflow = 'hidden'
    }
    function handelclosefatha() {
        soraDiv.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    //ysen
    function handelysenstyle() {
        ysensora.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
    function handelcloseysen() {
        ysensora.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    //kahf
    function handelkahfstyle() {
        kahfsora.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
    function handelclosekahf() {
        kahfsora.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    //waqaa
    function handelwaqstyle() {
        waqsora.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
    function handelclosewaq() {
        waqsora.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    //Dokhan
    function handeldokhanstyle() {
        dokhansora.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
    function handelclosedokhan() {
        dokhansora.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    //Malk
    function handelmalkstyle() {
        malksora.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
    function handelclosemalk() {
        malksora.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    return (
        <div id='qr' style={{ padding: '10px 0', position: 'relative' }}>
            <div style={{ padding: '60px 10px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: ' 0 0 20px  0' }}>سورة يس</h2>
                <p>تهون عليه في قبره وتنيره، كما تتنزل به الرحمات والتجليات الإلهية بالمغفرة والرضا من الله عز وجل عليه.</p>
                <p> اهداء ثواب قراءة سورة يس للمتوفى مجدي عبد الفتاح</p>
                <audio style={{ margin: '25px 0 0 0', width: '90%' }} controls>
                    <source src='https://masba7a.com/mp3/yassin.mp3' type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <Button
                    disabled={data.length > 1 ? false : true}
                    onClick={() => {
                        handelYsen()
                        handelysenstyle()
                    }} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '20px', height: '20px', backgroundColor: 'transparent', marginLeft: '5px' }} src={img} alt='' />
                    قراءة
                </Button>
            </div>
            <hr style={{ marginBottom: '0', width: '90%' }} />
            <div style={{ padding: '60px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: ' 0 0 20px  0' }}>سورة الكهف</h2>
                <p> اهداء ثواب قراءة سورة الكهف للمتوفى مجدي عبد الفتاح</p>

                <audio style={{ margin: '25px 0 0 0', width: '90%' }} controls>
                    <source src='https://dl.surah.space/dl/reciter/25/64/018.mp3?h=X3RWuCu9SZUv5ZpDFkyyfQ&expires=1707350639' type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <Button
                    disabled={data.length > 1 ? false : true}
                    onClick={() => {
                        handelKahf();
                        handelkahfstyle()
                    }} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '20px', height: '20px', backgroundColor: 'transparent', marginLeft: '5px' }} src={img} alt='' />
                    قراءة </Button>
            </div>

            <hr style={{ marginBottom: '0', width: '90%' }} />
            <div style={{ padding: '60px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: ' 0 0 20px  0' }}>سورة الواقعة</h2>
                <p> اهداء ثواب قراءة سورة الوقعه للمتوفى مجدي عبد الفتاح</p>

                <audio style={{ margin: '25px 0 0 0', width: '90%' }} controls>
                    <source src='https://dl.surah.space/dl/reciter/25/64/056.mp3?h=Vjb0M_9nihedOWmTKIJwkA&expires=1707436938' type="audio/mpeg" />
                </audio>
                <Button
                    disabled={data.length > 1 ? false : true}
                    onClick={() => {
                        handelWaq();
                        handelwaqstyle()
                    }} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '20px', height: '20px', backgroundColor: 'transparent', marginLeft: '5px' }} src={img} alt='' />قراءة </Button>
            </div>

            <hr style={{ marginBottom: '0', width: '90%' }} />
            <div style={{ padding: '60px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: ' 0 0 20px  0' }}>سورة الدخان </h2>
                <p> اهداء ثواب قراءة سورة الدخان للمتوفى مجدي عبد الفتاح</p>

                <audio style={{ margin: '25px 0 0 0', width: '90%' }} controls>
                    <source src='https://dl.surah.space/dl/reciter/25/64/044.mp3?h=GBDxpGGqFsUYnekKnH90_w&expires=1707449645' type="audio/mpeg" />
                </audio>
                <Button
                    disabled={data.length > 1 ? false : true}
                    onClick={() => {
                        handelDokhan();
                        handeldokhanstyle()
                    }} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '20px', height: '20px', backgroundColor: 'transparent', marginLeft: '5px' }} src={img} alt='' />قراءة </Button>
            </div>

            <hr style={{ marginBottom: '0', width: '90%' }} />
            <div style={{ padding: '60px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: ' 0 0 20px  0' }}>سورة البقره </h2>
                <audio style={{ margin: '25px 0 0 0', width: '90%' }} controls>
                    <source src='https://dl.surah.space/dl/reciter/25/64/002.mp3?h=ZLUCg4OLwdJcYNZb5wAzQg&expires=1707436864' type="audio/mpeg" />
                </audio>
            </div>


            <hr style={{ marginBottom: '0', width: '90%' }} />
            <div style={{ padding: '60px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: ' 0 0 20px  0' }}>سورة الفاتحه </h2>
                <p>جاء الشرع الشريف بقراءة سورة الفاتحة على المتوفى؛ وذلك لأن فيها مِن الخصوصية في نفع الميت وطلب الرحمة والمغفرة له ما ليس في غيرها.</p>
                <p> اهداء ثواب قراءة سورة الفاتحه للمتوفى مجدي عبد الفتاح</p>

                <audio style={{ margin: '25px 0 0 0', width: '90%' }} controls>
                    <source src='https://dl.surah.space/dl/reciter/25/64/001.mp3?h=wccGC7ouYH8fNZ5oLbdnlg&expires=1707594024' type="audio/mpeg" />
                </audio>
                <Button
                    disabled={data.length > 1 ? false : true}
                    onClick={() => {
                        handelFatha();
                        handelfathastyle()
                    }} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '20px', height: '20px', backgroundColor: 'transparent', marginLeft: '5px' }} src={img} alt='' />قراءة </Button>
            </div>


            <hr style={{ marginBottom: '0', width: '90%' }} />
            <div style={{ padding: '60px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: ' 0 0 20px  0' }}>سورة الملك </h2>
                <p> اهداء ثواب قراءة سورة الملك للمتوفى مجدي عبد الفتاح</p>

                <audio style={{ margin: '25px 0 0 0', width: '90%' }} controls>
                    <source src='https://dl.surah.space/dl/reciter/25/64/067.mp3?h=2vu4srdd8NkS_bECMoEnjg&expires=1707609913' type="audio/mpeg" />
                </audio>
                <Button
                    disabled={data.length > 1 ? false : true}
                    onClick={() => {
                        handelMalk();
                        handelmalkstyle()
                    }} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '20px', height: '20px', backgroundColor: 'transparent', marginLeft: '5px' }} src={img} alt='' />قراءة </Button>
            </div>


            <div className='sora' id='fathasora'>
                <div className='first-div'>
                    <div className='second-div'>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: '12px 15px 0', alignItems: 'center', width: '100%' }}>
                            <Button onClick={handelclosefatha} style={{ padding: '0 7px', height: '25px' }}>X</Button>
                            <h3>{fathaName}</h3>
                        </div>
                        <hr style={{ margin: '0', width: '100%' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65%' }}>
                            <img style={{ padding: '10px 5px 20px' }} src='https://masba7a.com/img/basmala.png' alt='' />
                            <ul style={{ listStyle: 'none' }}>
                                {f.map((item, index) => {
                                    return (
                                        <li style={{ display: 'inline', fontFamily: 'QuranFont', fontSize: "22px", fontWeight: 'bold' }} key={index}>
                                            {` ${item.text} `}
                                            <label style={{ fontFamily: 'QuranFont', color: '#0da755' }}> ﴿{item.number}﴾ </label>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sora' id='ysensora'>
                <div className='first-div'>
                    <div className='second-div'>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: '12px 15px 0', alignItems: 'center', width: '100%' }}>
                            <Button onClick={handelcloseysen} style={{ padding: '0 7px', height: '25px' }}>X</Button>
                            <h3>{ysenName}</h3>
                        </div>
                        <hr style={{ margin: '0', width: '100%' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65%' }}>
                            <img style={{ padding: '10px 5px 20px' }} src='https://masba7a.com/img/basmala.png' alt='' />
                            <ul style={{ listStyle: 'none' }}>
                                {y.map((item, index) => {
                                    return (
                                        <li style={{ display: 'inline', fontFamily: 'QuranFont', fontSize: "22px", fontWeight: 'bold' }} key={index}>
                                            {` ${item.text} `}
                                            <label style={{ fontFamily: 'QuranFont', color: '#0da755' }}> ﴿{item.number}﴾ </label>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sora' id='kahfsora'>
                <div className='first-div'>
                    <div className='second-div'>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: '12px 15px 0', alignItems: 'center', width: '100%' }}>
                            <Button onClick={handelclosekahf} style={{ padding: '0 7px', height: '25px' }}>X</Button>
                            <h3>{kahfName}</h3>
                        </div>
                        <hr style={{ margin: '0', width: '100%' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65%' }}>
                            <img style={{ padding: '10px 5px 20px' }} src='https://masba7a.com/img/basmala.png' alt='' />
                            <ul style={{ listStyle: 'none' }}>
                                {k.map((item, index) => {
                                    return (
                                        <li style={{ display: 'inline', fontFamily: 'QuranFont', fontSize: "22px", fontWeight: 'bold' }} key={index}>
                                            {` ${item.text} `}
                                            <label style={{ fontFamily: 'QuranFont', color: '#0da755' }}> ﴿{item.number}﴾ </label>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sora' id='waqsora'>
                <div className='first-div'>
                    <div className='second-div'>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: '12px 15px 0', alignItems: 'center', width: '100%' }}>
                            <Button onClick={handelclosewaq} style={{ padding: '0 7px', height: '25px' }}>X</Button>
                            <h3>{waqName}</h3>
                        </div>
                        <hr style={{ margin: '0', width: '100%' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65%' }}>
                            <img style={{ padding: '10px 5px 20px' }} src='https://masba7a.com/img/basmala.png' alt='' />
                            <ul style={{ listStyle: 'none' }}>
                                {w.map((item, index) => {
                                    return (
                                        <li style={{ display: 'inline', fontFamily: 'QuranFont', fontSize: "22px", fontWeight: 'bold' }} key={index}>
                                            {` ${item.text} `}
                                            <label style={{ fontFamily: 'QuranFont', color: '#0da755' }}> ﴿{item.number}﴾ </label>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sora' id='dokhansora'>
                <div className='first-div'>
                    <div className='second-div'>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: '12px 15px 0', alignItems: 'center', width: '100%' }}>
                            <Button onClick={handelclosedokhan} style={{ padding: '0 7px', height: '25px' }}>X</Button>
                            <h3>{dokhanName}</h3>
                        </div>
                        <hr style={{ margin: '0', width: '100%' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65%' }}>
                            <img style={{ padding: '10px 5px 20px' }} src='https://masba7a.com/img/basmala.png' alt='' />
                            <ul style={{ listStyle: 'none' }}>
                                {d.map((item, index) => {
                                    return (
                                        <li style={{ display: 'inline', fontFamily: 'QuranFont', fontSize: "22px", fontWeight: 'bold' }} key={index}>
                                            {` ${item.text} `}
                                            <label style={{ fontFamily: 'QuranFont', color: '#0da755' }}> ﴿{item.number}﴾ </label>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sora' id='malksora'>
                <div className='first-div'>
                    <div className='second-div'>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: '12px 15px 0', alignItems: 'center', width: '100%' }}>
                            <Button onClick={handelclosemalk} style={{ padding: '0 7px', height: '25px' }}>X</Button>
                            <h3>{malkName}</h3>
                        </div>
                        <hr style={{ margin: '0', width: '100%' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65%' }}>
                            <img style={{ padding: '10px 5px 20px' }} src='https://masba7a.com/img/basmala.png' alt='' />
                            <ul style={{ listStyle: 'none' }}>
                                {m.map((item, index) => {
                                    return (
                                        <li style={{ display: 'inline', fontFamily: 'QuranFont', fontSize: "22px", fontWeight: 'bold' }} key={index}>
                                            {` ${item.text} `}
                                            <label style={{ fontFamily: 'QuranFont', color: '#0da755' }}> ﴿{item.number}﴾ </label>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ApiSection