"use client";
import Layout from "@/componets/Layout";
import { useRouter } from "next/router";
import { useState, useEffect, useLayoutEffect } from "react";
const Payments = () => {
    const [products, setProducts] = useState({ upi: "", Gpay: true });

    const [products1, setProducts1] = useState({ pixelId: "" });
    const [data133, setdata133] = useState([]);
    const initialTime = 900; // 10 minutes in seconds
    const [time, setTime] = useState(initialTime);
    useEffect(() => {
        const timer = setInterval(() => {
            if (time <= 0) {
                clearInterval(timer);
            } else {
                setTime((prevTime) => prevTime - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
            let data1 = JSON.parse(localStorage.getItem("d1"));
            setdata133(data1);
        };
    }, [time]);
    console.log(data133);
    const totalMrp = data133.reduce(
        (sum, product) => sum + parseInt(product.price * product.quantity),
        0
    );

    console.log(totalMrp); // Output: 359
    useEffect(() => {
        fetchProducts();
        fetchProducts1();
    }, []);

    const fetchProducts1 = async () => {
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            };

            const response = await fetch('/api/upichange', {
                method: 'GET',
                headers: headersList,
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("upi", data.upi.upi)
                setProducts1(data.pixelId);
            } else {
            }
        } catch (error) {
        }
    };
    const fetchProducts = async () => {
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            };

            const response = await fetch('/api/upichange', {
                method: 'GET',
                headers: headersList,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.upi.upi);
                setProducts(data.upi);
                setActiveTab(data.upi.Gpay === false ? data.upi.Phonepe === false ? 4 : 3 : 2)
            } else {
                console.error('Error fetching products:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }

    };
    const [user13, setuser13] = useState({})
    const [data, setdata] = useState({})
    const router = useRouter();

    const [activeTab, setActiveTab] = useState(3);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    const [payment, setPayment] = useState("");
    useEffect(() => {
        switch (activeTab) {
            case 4:
                setPayment(`paytmmp://pay?pa=${products.upi}&pn=Book My Event&am=${Number(
                    totalMrp
                )}&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=Online%20Shopping`);
                break;
            case 1:
                setPayment(`bhim://pay?pa=${products.upi}&pn=Online%20Shopping&am=${Number(
                    totalMrp
                )}&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=Online%20Shopping`);
                break;
            case 2:
                setPayment(`tez://upi/pay?pa=${products.upi}&pn=Online%20Shopping&am=${Number(
                    totalMrp
                )}&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=Online%20Shopping`);
                break;
            case 3:
                setPayment(`phonepe://pay?pa=${products.upi}&pn=Book My Event&am=${Number(
                    totalMrp
                )}&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=Online%20Shopping`);
                break;
            case 5:
                setPayment(`whatsapp://pay?phone=${products.upi}&text=Pay%20for%20Online%20Shopping&amount=${Number(
                    totalMrp
                )}&currency=INR`);
                break;

            default:
                break;
        }
    }, [activeTab, products.upi, totalMrp]);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    console.log(products);
    return (
        products.upi && <Layout data={products1}>
            <>
                <title>Sale Sale Sale - Home</title>
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content={-1} />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="Keywords" content="Maha Sale" />
                <meta name="Description" content="Maha Sale" />
                <meta property="og:title" content="Maha Sale" />
                <meta name="theme-color" content="#9f2089" id="themeColor" />
                <meta
                    name="viewport"
                    content="width=device-width,minimum-scale=1,user-scalable=no"
                />
                <link rel="shortcut icon" href="https://www.meesho.com/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="/assets/website/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/website/css/custom.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                    rel="stylesheet"
                />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n        body,\n        a,\n        p,\n        span,\n        div,\n        input,\n        button,\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6,\n        button,\n        input,\n        optgroup,\n        select,\n        textarea {\n            font-family: 'Poppins', sans-serif !important;\n        }\n    "
                    }}
                />
                {/* Meta Pixel Code */}
                <noscript>
                    &lt;img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=239159289163632&amp;ev=PageView&amp;noscript=1"
                    /&gt;
                </noscript>
                {/* End Meta Pixel Code */}
                <link
                    rel="stylesheet"
                    href="chrome-extension://mhnlakgilnojmhinhkckjpncpbhabphi/content.css"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
                />
                <style
                    id="_goober"
                    dangerouslySetInnerHTML={{
                        __html:
                            " .go1475592160{height:0;}.go1671063245{height:auto;}.go1888806478{display:flex;flex-wrap:wrap;flex-grow:1;}@media (min-width:600px){.go1888806478{flex-grow:initial;min-width:288px;}}.go167266335{background-color:#313131;font-size:0.875rem;line-height:1.43;letter-spacing:0.01071em;color:#fff;align-items:center;padding:6px 16px;border-radius:4px;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);}.go3162094071{padding-left:20px;}.go3844575157{background-color:#313131;}.go1725278324{background-color:#43a047;}.go3651055292{background-color:#d32f2f;}.go4215275574{background-color:#ff9800;}.go1930647212{background-color:#2196f3;}.go946087465{display:flex;align-items:center;padding:8px 0;}.go703367398{display:flex;align-items:center;margin-left:auto;padding-left:16px;margin-right:-8px;}.go3963613292{width:100%;position:relative;transform:translateX(0);top:0;right:0;bottom:0;left:0;min-width:288px;}.go1141946668{box-sizing:border-box;display:flex;max-height:100%;position:fixed;z-index:1400;height:auto;width:auto;transition:top 300ms ease 0ms,right 300ms ease 0ms,bottom 300ms ease 0ms,left 300ms ease 0ms,max-width 300ms ease 0ms;pointer-events:none;max-width:calc(100% - 40px);}.go1141946668 .notistack-CollapseWrapper{padding:6px 0px;transition:padding 300ms ease 0ms;}@media (max-width:599.95px){.go1141946668{width:100%;max-width:calc(100% - 32px);}}.go3868796639 .notistack-CollapseWrapper{padding:2px 0px;}.go3118922589{top:14px;flex-direction:column;}.go1453831412{bottom:14px;flex-direction:column-reverse;}.go4027089540{left:20px;}@media (min-width:600px){.go4027089540{align-items:flex-start;}}@media (max-width:599.95px){.go4027089540{left:16px;}}.go2989568495{right:20px;}@media (min-width:600px){.go2989568495{align-items:flex-end;}}@media (max-width:599.95px){.go2989568495{right:16px;}}.go4034260886{left:50%;transform:translateX(-50%);}@media (min-width:600px){.go4034260886{align-items:center;}}"
                    }}
                />
                <div id="container" style={{ overflow: "hidden" }}>
                    <div style={{ height: "100%" }} data-reactroot="">
                        <div>
                            <div className="_2dxSCm">
                                <div className="_2dxSCm">
                                    <div className="_3CzzrP" style={{}}>
                                        <div className="_38U37R">
                                            <div>
                                                <div className="_1FWdmb" style={{}}>
                                                    <div className="d-flex align-items-center">
                                                        <a
                                                            className="_3NH1qf "
                                                            id="back-btn"
                                                            style={{ marginTop: 5 }}
                                                        >
                                                            <svg
                                                                width={25}
                                                                height={25}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                mt={2}
                                                                iconsize={24}
                                                                className="sc-gswNZR ffVWIj"
                                                            >
                                                                <path
                                                                    d="M13.7461 2.31408C13.5687 2.113 13.3277 2 13.0765 2C12.8252 2 12.5843 2.113 12.4068 2.31408L6.27783 9.24294C5.90739 9.66174 5.90739 10.3382 6.27783 10.757L12.4068 17.6859C12.7773 18.1047 13.3757 18.1047 13.7461 17.6859C14.1166 17.2671 14.0511 16.5166 13.7461 16.1718L8.29154 9.99462L13.7461 3.82817C13.9684 3.57691 14.1071 2.72213 13.7461 2.31408Z"
                                                                    fill="#666666"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <a className="_3NH1qf d-none" id="showmenu">
                                                            <svg
                                                                width="100%"
                                                                height="100%"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                mt={5}
                                                                iconsize={24}
                                                                className="sc-gswNZR jQgwzc"
                                                            >
                                                                <path
                                                                    d="M2 17.2222C2 17.8359 2.49746 18.3333 3.11111 18.3333H20.8889C21.5025 18.3333 22 17.8359 22 17.2222C22 16.6086 21.5025 16.1111 20.8889 16.1111H3.11111C2.49746 16.1111 2 16.6086 2 17.2222ZM2 11.6667C2 12.2803 2.49746 12.7778 3.11111 12.7778H20.8889C21.5025 12.7778 22 12.2803 22 11.6667C22 11.053 21.5025 10.5556 20.8889 10.5556H3.11111C2.49746 10.5556 2 11.053 2 11.6667ZM3.11111 5C2.49746 5 2 5.49746 2 6.11111C2 6.72476 2.49746 7.22222 3.11111 7.22222H20.8889C21.5025 7.22222 22 6.72476 22 6.11111C22 5.49746 21.5025 5 20.8889 5H3.11111Z"
                                                                    fill="#333333"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <h4 className="header-title">Payment</h4>
                                                    </div>
                                                    <div className="header-menu">
                                                        <a className="_3NH1qf" href="#">
                                                            <svg
                                                                width={24}
                                                                height={25}
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                ml={16}
                                                                iconsize={24}
                                                                className="sc-gswNZR dJzkYm"
                                                            >
                                                                <path fill="#fff" d="M0 .657h24v24H0z" />
                                                                <path fill="#fff" d="M2 2.657h20v20H2z" />
                                                                <path
                                                                    d="M22 9.174c0 3.724-1.87 7.227-9.67 12.38a.58.58 0 0 1-.66 0C3.87 16.401 2 12.898 2 9.174S4.59 3.67 7.26 3.66c3.22-.081 4.61 3.573 4.74 3.774.13-.201 1.52-3.855 4.74-3.774C19.41 3.669 22 5.45 22 9.174Z"
                                                                    fill="#ED3843"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <a className="_3NH1qf" href="#" onclick="openNav()">
                                                            <svg
                                                                width={24}
                                                                height={25}
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                ml={16}
                                                                iconsize={24}
                                                                className="sc-gswNZR dJzkYm"
                                                            >
                                                                <g clipPath="url(#cart-header_svg__a)">
                                                                    <path fill="#fff" d="M2.001 1.368h20v20h-20z" />
                                                                    <g clipPath="url(#cart-header_svg__b)">
                                                                        <g clipPath="url(#cart-header_svg__c)">
                                                                            <path
                                                                                d="M6.003 5.183h15.139c.508 0 .908.49.85 1.046l-.762 7.334c-.069.62-.537 1.1-1.103 1.121l-12.074.492-2.05-9.993Z"
                                                                                fill="#C53EAD"
                                                                            />
                                                                            <path
                                                                                d="M11.8 21.367c.675 0 1.22-.597 1.22-1.334 0-.737-.545-1.335-1.22-1.335-.673 0-1.22.598-1.22 1.335s.547 1.334 1.22 1.334ZM16.788 21.367c.674 0 1.22-.597 1.22-1.334 0-.737-.546-1.335-1.22-1.335-.673 0-1.22.598-1.22 1.335s.547 1.334 1.22 1.334Z"
                                                                                fill="#9F2089"
                                                                            />
                                                                            <path
                                                                                d="m2.733 4.169 3.026 1.42 2.528 12.085c.127.609.615 1.036 1.181 1.036h9.615"
                                                                                stroke="#9F2089"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="cart-header_svg__a">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(2.001 1.368)"
                                                                            d="M0 0h20v20H0z"
                                                                        />
                                                                    </clipPath>
                                                                    <clipPath id="cart-header_svg__b">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(2.001 1.368)"
                                                                            d="M0 0h20v20H0z"
                                                                        />
                                                                    </clipPath>
                                                                    <clipPath id="cart-header_svg__c">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(2.001 3.368)"
                                                                            d="M0 0h20v18H0z"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span className="header__cart-count header__cart-count--floating bubble-count">
                                                                2
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="search-bar d-none">
                                                    <div className="_3QNhdh" id="guidSearch">
                                                        <div className="ORogdv">
                                                            <div className="_1k9EoO">
                                                                <div className="_2d36Hu">
                                                                    <a href="javascript:void(0)" className="search-div">
                                                                        <div
                                                                            placeholder="Search for Sarees, Kurtis, Cosmetics, etc."
                                                                            className="sc-eeMvmM fscVpr"
                                                                        >
                                                                            <div className="sc-cUEOzv ilUiic">
                                                                                <svg
                                                                                    width={20}
                                                                                    height={21}
                                                                                    viewBox="0 0 20 21"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <rect
                                                                                        width={20}
                                                                                        height={20}
                                                                                        transform="translate(0 0.560547)"
                                                                                        fill="white"
                                                                                    />
                                                                                    <g clipPath="url(#clip0_2444_6193)">
                                                                                        <path
                                                                                            d="M13.4564 12.0018L11.4426 14.0156L16.3498 18.9228C16.7013 19.2743 17.2711 19.2743 17.6226 18.9228L18.3636 18.1818C18.7151 17.8303 18.7151 17.2604 18.3636 16.909L13.4564 12.0018Z"
                                                                                            fill="#ADADC4"
                                                                                        />
                                                                                        <path
                                                                                            d="M14.7135 8.69842C14.7135 12.3299 11.7696 15.2738 8.13812 15.2738C4.50664 15.2738 1.56274 12.3299 1.56274 8.69842C1.56274 5.06694 4.50664 2.12305 8.13812 2.12305C11.7696 2.12305 14.7135 5.06694 14.7135 8.69842Z"
                                                                                            fill="#EAEAF2"
                                                                                            stroke="#ADADC4"
                                                                                            strokeWidth="1.125"
                                                                                        />
                                                                                    </g>
                                                                                    <defs>
                                                                                        <clipPath id="clip0_2444_6193">
                                                                                            <rect
                                                                                                width={18}
                                                                                                height={18}
                                                                                                fill="white"
                                                                                                transform="translate(1 1.56055)"
                                                                                            />
                                                                                        </clipPath>
                                                                                    </defs>
                                                                                </svg>
                                                                            </div>
                                                                            <input
                                                                                fontSize="13px"
                                                                                fontWeight="book"
                                                                                type="text"
                                                                                placeholder="Search for Sarees, Kurtis, Cosmetics, etc."
                                                                                readOnly=""
                                                                                className="sc-dkrFOg bWTBPR sc-bCfvAP dsLogY search-input-elm sc-bCfvAP dsLogY search-input-elm"
                                                                                color="greyBase"
                                                                                defaultValue=""
                                                                            />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-bBXxYQ jMfCEJ" />{" "}
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    '\n        .cart_page_footer {\n            box-shadow: none;\n            position: fixed;\n            bottom: 80px\n        }\n\n        .header-menu {\n            display: none;\n        }\n\n        .cart-list {\n            max-height: max-content;\n        }\n\n        ._1fhgRH {\n            margin-bottom: 250px;\n        }\n\n        .gNFCeh {\n            display: flex;\n            -webkit-box-pack: justify;\n            justify-content: space-between;\n            padding: 16px 16px 18px;\n            background-color: #FFFFFF;\n        }\n\n        .fill-grey-t2 {\n            fill: rgb(139, 139, 163);\n        }\n\n        .hEBjyt {\n            color: rgb(53, 53, 67);\n            font-style: normal;\n            font-weight: 700;\n            font-size: 17px;\n            line-height: 20px;\n            font-family: "Mier bold";\n            margin: 0px;\n            padding: 0px;\n        }\n\n        .cHsEym {\n            padding: 0px 16px 18px;\n            background-color: #FFFFFF;\n        }\n\n        .efQsfx {\n            display: flex;\n            -webkit-box-align: center;\n            align-items: center;\n            -webkit-box-pack: start;\n            justify-content: start;\n            flex-direction: row;\n            border-radius: 4px;\n            background-color: rgb(231, 238, 255);\n            padding: 6px 12px;\n            gap: 10px;\n        }\n\n        .eVDQPI {\n            display: flex;\n            -webkit-box-align: center;\n            align-items: center;\n            padding-left: 10px;\n            height: 60px;\n            width: 60px;\n        }\n\n        .cOCnuI {\n            display: flex;\n            -webkit-box-align: center;\n            -webkit-box-pack: center;\n            justify-content: center;\n            flex-direction: column;\n            align-items: flex-start;\n            max-height: 50px;\n            border-radius: 4px;\n            background-color: rgb(231, 238, 255);\n        }\n\n        .eNkLGR {\n            color: rgb(159, 32, 137);\n            font-style: normal;\n            font-weight: 600;\n            font-size: 15px;\n            line-height: 20px;\n            font-family: "Mier demi";\n            margin: 0px;\n            padding: 0px;\n        }\n\n        .RrifI {\n            color: rgb(85, 133, 248);\n        }\n\n        .GmPbS {\n            padding: 6px 16px;\n            display: flex;\n            -webkit-box-align: center;\n            align-items: center;\n            gap: 10px;\n            background-color: #FFFFFF;\n        }\n\n        .GmPbS span {\n            font-weight: 600;\n            font-size: 10px;\n            font-family: "Mier book";\n        }\n\n        .GmPbS div {\n            height: 1px;\n            background-color: rgb(206, 206, 222);\n            -webkit-box-flex: 1;\n            flex-grow: 1;\n        }\n\n        .cart__footer {\n            position: unset;\n            box-shadow: unset;\n            border-top: 5px solid #eaeaf2;\n            border-bottom: 5px solid #eaeaf2;\n        }\n\n        .error-message {\n            font-size: 14px;\n            color: red;\n            text-align: center;\n            margin-top: 10px;\n        }\n\n        .eGwEyP {\n            padding: 12px 16px;\n            display: flex;\n            -webkit-box-pack: justify;\n            justify-content: space-between;\n        }\n\n        .dUijPM {\n            display: flex;\n            flex-direction: column;\n            -webkit-box-pack: justify;\n            justify-content: space-between;\n            max-width: 50%;\n            padding-right: 8px;\n        }\n\n        .dUijPM span {\n            color: rgb(53, 53, 67);\n            font-weight: 700;\n            font-size: 17px;\n            line-height: 20px;\n            font-family: "Mier bold";\n        }\n\n        .dUijPM button {\n            font-weight: unset;\n            font-family: "Mier bold";\n        }\n\n        .ylmAj {\n            color: rgb(159, 32, 137);\n            cursor: pointer;\n            font-style: normal;\n            text-align: center;\n            letter-spacing: 0.0015em;\n            font-size: 13px;\n            font-weight: 700;\n            line-height: 16px;\n            border-radius: 4px;\n            background: inherit;\n            border: none;\n            padding: 0px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .iAFVK {\n            width: 50%;\n        }\n\n        .iAFVK button {\n            width: 100%;\n            font-weight: 600;\n            font-family: "Mier demi";\n        }\n\n        .bwHzRF {\n            cursor: pointer;\n            font-style: normal;\n            text-align: center;\n            letter-spacing: 0.0015em;\n            font-size: 15px;\n            line-height: 20px;\n            border-radius: 4px;\n            color: rgb(255, 255, 255);\n            background: rgb(159, 32, 137);\n            border: none;\n            padding: 12px;\n            font-weight: 500;\n            width: 100%;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .ixHOyU {\n            position: fixed;\n            width: 100%;\n            max-width: 800px;\n            background-color: rgb(255, 255, 255);\n            bottom: 0px;\n            z-index: 1;\n        }\n\n        .IhlWp {\n            display: flex;\n            -webkit-box-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            align-items: center;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            border: 2px solid rgb(85, 133, 248);\n            color: rgb(85, 133, 248);\n            font-size: 11px;\n            font-weight: 700;\n            background-color: rgb(85, 133, 248);\n        }\n    '
                                            }}
                                        />
                                        <div id="container">
                                            <div style={{}} data-reactroot="">
                                                <div className="_1fhgRH">
                                                    <div
                                                        data-testid="stepper-container"
                                                        className="sc-geuGuN gqSLnX"
                                                    >
                                                        <div className="sc-kGhOqx chtKwW">
                                                            <ul className="sc-bAKPPm eOmvaT">
                                                                <div className="sc-jZiqTT hGoFZP">
                                                                    <div className="sc-bxSTMQ geeMAN">
                                                                        <div
                                                                            data-testid="left-line"
                                                                            className="sc-PJClH lagJzQ"
                                                                        />
                                                                        <div className="sc-iJkHyd IhlWp">
                                                                            <svg
                                                                                width={20}
                                                                                height={20}
                                                                                viewBox="0.5 0 20 20"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <title>check-icon</title>
                                                                                <rect
                                                                                    x="1.25"
                                                                                    y="0.75"
                                                                                    width="18.5"
                                                                                    height="18.5"
                                                                                    rx="9.25"
                                                                                    fill="#5585F8"
                                                                                />
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    clipRule="evenodd"
                                                                                    d="M16.6716 7.37285C17.0971 6.96439 17.1108 6.28832 16.7023 5.86289C16.2939 5.43755 15.618 5.4238 15.1926 5.83218L10.9997 9.85723L10.9997 9.85727L9.02229 11.7557L6.82333 9.55674C6.40622 9.13963 5.72995 9.13963 5.31284 9.55674C4.8957 9.97388 4.89573 10.6502 5.31289 11.0673L8.26525 14.0192C8.66883 14.4227 9.32103 14.4293 9.73274 14.0341L10.9998 12.8178V12.8178L16.6716 7.37285Z"
                                                                                    fill="white"
                                                                                />
                                                                                <rect
                                                                                    x="1.25"
                                                                                    y="0.75"
                                                                                    width="18.5"
                                                                                    height="18.5"
                                                                                    rx="9.25"
                                                                                    stroke="#5585F8"
                                                                                    strokeWidth="1.5"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                        <div
                                                                            data-testid="right-line"
                                                                            className="sc-jfdOKL bSausD"
                                                                        />
                                                                    </div>
                                                                    <div className="sc-jWquRx ezBHwi">Cart</div>
                                                                </div>
                                                                <div className="sc-jZiqTT hGoFZP">
                                                                    <div className="sc-bxSTMQ geeMAN">
                                                                        <div
                                                                            data-testid="left-line"
                                                                            className="sc-PJClH kHHhBS"
                                                                        />
                                                                        <div className="sc-iJkHyd IhlWp">
                                                                            <svg
                                                                                width={20}
                                                                                height={20}
                                                                                viewBox="0.5 0 20 20"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <title>check-icon</title>
                                                                                <rect
                                                                                    x="1.25"
                                                                                    y="0.75"
                                                                                    width="18.5"
                                                                                    height="18.5"
                                                                                    rx="9.25"
                                                                                    fill="#5585F8"
                                                                                />
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    clipRule="evenodd"
                                                                                    d="M16.6716 7.37285C17.0971 6.96439 17.1108 6.28832 16.7023 5.86289C16.2939 5.43755 15.618 5.4238 15.1926 5.83218L10.9997 9.85723L10.9997 9.85727L9.02229 11.7557L6.82333 9.55674C6.40622 9.13963 5.72995 9.13963 5.31284 9.55674C4.8957 9.97388 4.89573 10.6502 5.31289 11.0673L8.26525 14.0192C8.66883 14.4227 9.32103 14.4293 9.73274 14.0341L10.9998 12.8178V12.8178L16.6716 7.37285Z"
                                                                                    fill="white"
                                                                                />
                                                                                <rect
                                                                                    x="1.25"
                                                                                    y="0.75"
                                                                                    width="18.5"
                                                                                    height="18.5"
                                                                                    rx="9.25"
                                                                                    stroke="#5585F8"
                                                                                    strokeWidth="1.5"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                        <div
                                                                            data-testid="right-line"
                                                                            className="sc-jfdOKL bSausD"
                                                                        />
                                                                    </div>
                                                                    <div className="sc-jWquRx ezBHwi">Address</div>
                                                                </div>
                                                                <div className="sc-jZiqTT hGoFZP">
                                                                    <div className="sc-bxSTMQ geeMAN">
                                                                        <div
                                                                            data-testid="left-line"
                                                                            className="sc-PJClH kHHhBS"
                                                                        />
                                                                        <div className="sc-dGHKFW cRaGaC">3</div>
                                                                        <div
                                                                            data-testid="right-line"
                                                                            className="sc-jfdOKL bSausD"
                                                                        />
                                                                    </div>
                                                                    <div className="sc-jWquRx iefUco">Payment</div>
                                                                </div>
                                                                <div className="sc-jZiqTT hGoFZP">
                                                                    <div className="sc-bxSTMQ geeMAN">
                                                                        <div
                                                                            data-testid="left-line"
                                                                            className="sc-PJClH kHHhBS"
                                                                        />
                                                                        <div className="sc-dGHKFW iefbLi">4</div>
                                                                        <div
                                                                            data-testid="right-line"
                                                                            className="sc-jfdOKL jSyZxf"
                                                                        />
                                                                    </div>
                                                                    <div className="sc-jWquRx ezBHwi">Summary</div>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="sc-bBXxYQ jMfCEJ" />
                                                    <div className="sc-dwVMhp gNFCeh">
                                                        <h6
                                                            fontSize="17px"
                                                            fontWeight="bold"
                                                            color="greyBase"
                                                            className="sc-fnykZs hEBjyt"
                                                        >
                                                            Select Payment Method
                                                        </h6>
                                                        <svg
                                                            width={80}
                                                            height={24}
                                                            viewBox="0 0 80 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M11.1172 3C10.3409 3 9.04382 3.29813 7.82319 3.63C6.57444 3.9675 5.31557 4.36687 4.57532 4.60875C4.26582 4.71096 3.99143 4.8984 3.78367 5.14954C3.57591 5.40068 3.44321 5.70533 3.40082 6.0285C2.73032 11.0651 4.28619 14.7979 6.17394 17.2672C6.97447 18.3236 7.92897 19.2538 9.00557 20.0269C9.43982 20.334 9.84257 20.5691 10.1845 20.73C10.4995 20.8785 10.8382 21 11.1172 21C11.3962 21 11.7337 20.8785 12.0498 20.73C12.4621 20.5296 12.8565 20.2944 13.2288 20.0269C14.3054 19.2538 15.2599 18.3236 16.0604 17.2672C17.9482 14.7979 19.504 11.0651 18.8335 6.0285C18.7912 5.70518 18.6586 5.40035 18.4508 5.14901C18.2431 4.89768 17.9686 4.71003 17.659 4.60762C16.5845 4.25529 15.5015 3.92894 14.4112 3.62888C13.1905 3.29925 11.8934 3 11.1172 3ZM13.5314 9.68925C13.637 9.58363 13.7803 9.52429 13.9297 9.52429C14.079 9.52429 14.2223 9.58363 14.3279 9.68925C14.4335 9.79487 14.4929 9.93813 14.4929 10.0875C14.4929 10.2369 14.4335 10.3801 14.3279 10.4858L10.9529 13.8608C10.9007 13.9131 10.8386 13.9547 10.7703 13.9831C10.7019 14.0114 10.6287 14.026 10.5547 14.026C10.4807 14.026 10.4074 14.0114 10.3391 13.9831C10.2707 13.9547 10.2087 13.9131 10.1564 13.8608L8.46894 12.1733C8.41664 12.121 8.37516 12.0589 8.34685 11.9905C8.31855 11.9222 8.30398 11.849 8.30398 11.775C8.30398 11.701 8.31855 11.6278 8.34685 11.5595C8.37516 11.4911 8.41664 11.429 8.46894 11.3767C8.52124 11.3244 8.58333 11.283 8.65166 11.2547C8.71999 11.2264 8.79323 11.2118 8.86719 11.2118C8.94115 11.2118 9.01439 11.2264 9.08272 11.2547C9.15105 11.283 9.21314 11.3244 9.26544 11.3767L10.5547 12.6671L13.5314 9.68925Z"
                                                                fill="#ADC6FF"
                                                            />
                                                            <path
                                                                d="M24.1172 3.53998L24.2472 4.65998L26.0372 3.67998V9.49998H27.1472V2.49998H26.1472L24.1172 3.53998Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M31.5958 9.64998C33.2058 9.64998 34.2458 8.19998 34.2458 5.99998C34.2458 3.79998 33.2058 2.34998 31.5658 2.34998C29.9458 2.34998 28.9158 3.79998 28.9158 5.99998C28.9158 8.19998 29.9458 9.64998 31.5958 9.64998ZM31.5958 8.62998C30.5958 8.62998 30.0658 7.55998 30.0658 5.99998C30.0658 4.43998 30.5858 3.36998 31.5658 3.36998C32.5658 3.36998 33.0958 4.43998 33.0958 5.99998C33.0958 7.55998 32.5658 8.62998 31.5958 8.62998Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M38.149 9.64998C39.759 9.64998 40.799 8.19998 40.799 5.99998C40.799 3.79998 39.759 2.34998 38.119 2.34998C36.499 2.34998 35.469 3.79998 35.469 5.99998C35.469 8.19998 36.499 9.64998 38.149 9.64998ZM38.149 8.62998C37.149 8.62998 36.619 7.55998 36.619 5.99998C36.619 4.43998 37.139 3.36998 38.119 3.36998C39.119 3.36998 39.649 4.43998 39.649 5.99998C39.649 7.55998 39.119 8.62998 38.149 8.62998Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M43.4923 6.24998C44.3823 6.24998 45.0923 5.55998 45.0923 4.29998C45.0923 3.03998 44.3823 2.34998 43.4923 2.34998C42.6123 2.34998 41.9023 3.03998 41.9023 4.29998C41.9023 5.55998 42.6123 6.24998 43.4923 6.24998ZM48.2923 2.49998H47.4323L42.7823 9.49998H43.6423L48.2923 2.49998ZM43.4923 5.43998C43.0623 5.43998 42.7623 5.06998 42.7623 4.29998C42.7623 3.52998 43.0623 3.15998 43.4923 3.15998C43.9223 3.15998 44.2323 3.52998 44.2323 4.29998C44.2323 5.06998 43.9223 5.43998 43.4923 5.43998ZM47.5823 9.64998C48.4723 9.64998 49.1823 8.95998 49.1823 7.69998C49.1823 6.43998 48.4723 5.74998 47.5823 5.74998C46.7023 5.74998 45.9923 6.43998 45.9923 7.69998C45.9923 8.95998 46.7023 9.64998 47.5823 9.64998ZM47.5823 8.83998C47.1523 8.83998 46.8523 8.46998 46.8523 7.69998C46.8523 6.92998 47.1523 6.55998 47.5823 6.55998C48.0223 6.55998 48.3223 6.92998 48.3223 7.69998C48.3223 8.46998 48.0223 8.83998 47.5823 8.83998Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M55.4541 9.64998C56.9141 9.64998 57.9341 8.78998 57.9341 7.47998C57.9341 4.79998 54.3341 5.96998 54.3341 4.29998C54.3341 3.69998 54.8141 3.34998 55.4641 3.34998C56.2141 3.34998 56.6841 3.78998 56.7941 4.42998L57.9041 4.22998C57.7241 3.12998 56.8241 2.34998 55.4941 2.34998C54.1441 2.34998 53.1741 3.16998 53.1741 4.39998C53.1741 7.07998 56.7641 5.90998 56.7641 7.59998C56.7641 8.22998 56.2541 8.65998 55.4841 8.65998C54.7941 8.65998 54.1341 8.28998 54.0141 7.57998L52.9041 7.81998C53.1041 8.98998 54.2041 9.64998 55.4541 9.64998Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M65.2964 9.49998L62.6764 2.45998H61.4064L58.7864 9.49998H59.9964L60.6264 7.68998H63.4264L64.0664 9.49998H65.2964ZM62.0564 3.73998L63.0864 6.65998H60.9964L62.0164 3.73998H62.0564Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M71.3322 2.49998H66.7522V9.49998H67.8922V6.54998H70.4722V5.50998H67.8922V3.53998H71.3322V2.49998Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M77.6917 2.49998H73.0417V9.49998H77.6917V8.45998H74.1817V6.49998H76.8417V5.44998H74.1817V3.53998H77.6917V2.49998Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M27.307 18.9C28.657 18.9 29.627 17.95 29.627 16.7C29.627 15.33 28.537 14.5 27.207 14.5H24.717V21.5H25.857V18.9H27.307ZM28.447 16.7C28.447 17.31 28.027 17.85 27.117 17.85H25.857V15.55H27.007C28.037 15.55 28.447 16.11 28.447 16.7Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M36.4524 21.5L33.8324 14.46H32.5624L29.9424 21.5H31.1524L31.7824 19.69H34.5824L35.2224 21.5H36.4524ZM33.2124 15.74L34.2424 18.66H32.1524L33.1724 15.74H33.2124Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M39.6613 21.5V18.57L42.0913 14.5H40.8413L39.1513 17.45H39.1013L37.4113 14.5H36.0813L38.5213 18.57V21.5H39.6613Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M50.8513 21.5V14.5H49.1513L47.1513 19.76H47.1113L45.1213 14.5H43.3513V21.5H44.4913V15.98H44.5313L46.6113 21.5H47.5913L49.6713 15.98H49.7113V21.5H50.8513Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M57.5103 14.5H52.8604V21.5H57.5103V20.46H54.0004V18.5H56.6604V17.45H54.0004V15.54H57.5103V14.5Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M65.3439 21.54V14.5H64.2039V19.78L60.5339 14.46H59.2639V21.5H60.4039V16.22L64.0739 21.54H65.3439Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M72.0671 14.5H66.7571V15.55H68.8471V21.5H69.9871V15.55H72.0671V14.5Z"
                                                                className="fill-grey-t2"
                                                            />
                                                            <path
                                                                d="M75.4028 21.65C76.8628 21.65 77.8828 20.79 77.8828 19.48C77.8828 16.8 74.2828 17.97 74.2828 16.3C74.2828 15.7 74.7628 15.35 75.4128 15.35C76.1628 15.35 76.6328 15.79 76.7428 16.43L77.8528 16.23C77.6728 15.13 76.7728 14.35 75.4428 14.35C74.0928 14.35 73.1228 15.17 73.1228 16.4C73.1228 19.08 76.7128 17.91 76.7128 19.6C76.7128 20.23 76.2028 20.66 75.4328 20.66C74.7428 20.66 74.0828 20.29 73.9628 19.58L72.8528 19.82C73.0528 20.99 74.1528 21.65 75.4028 21.65Z"
                                                                className="fill-grey-t2"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="sc-hKdnnL cHsEym">
                                                        <div className="sc-liHMlC efQsfx">
                                                            <img src="/uploads/ezgif-2-aefef6d1c8.gif" width={60} />
                                                            <div className="sc-cuqtlR cOCnuI">
                                                                <span
                                                                    fontSize="15px"
                                                                    fontWeight="demi"
                                                                    className="sc-fnykZs eNkLGR sc-bTmccw RrifI sc-bTmccw RrifI"
                                                                    color="pinkBase"
                                                                >
                                                                    Pay online &amp; get EXTRA ₹33 off
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div data-testid="PAY ONLINE" className="sc-gVAlfg GmPbS">
                                                            <span>PAY ONLINE</span>
                                                            <div />
                                                        </div>
                                                        <ul className="accordion">
                                                            {/* <li class="accordion-item ">
                            <h3 class="accordion-thumb">
                                <div class=" flex align-items-center">
                                    <img src="https://images.meesho.com/files/headless/card_ppr.png" width="20px">
                                    <span class="cash-delivery px-2">Debit/Credit Cards</span>
                                </div>
                            </h3>
                            <div class="accordion-panel">
                                <p class='error-message'>Debit/ Credit card payments are temporarily unavailable.</p>
                            </div>
                        </li>
                        <li class="accordion-item ">
                            <h3 class="accordion-thumb">
                                <div class=" flex align-items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" fill="white"></rect>
                                        <g clip-path="url(#clip0_1522_56449)">
                                            <path d="M13.1306 1.75918L0.0769665 5.93773C-0.468501 6.11233 -0.792684 6.65432 -0.631688 7.15726L1.59253 14.1056C1.75093 14.6005 2.33218 14.8615 2.87765 14.6869L15.9218 10.5114C16.4767 10.3338 16.7915 9.79481 16.6305 9.29187L14.4063 2.34351C14.2479 1.84868 13.6666 1.58759 13.1212 1.76219L13.1306 1.75918Z" fill="#90B1FB"></path>
                                            <path d="M14.9493 3.72461H1.06066C0.4803 3.72461 0 4.11077 0 4.59939V11.8498C0 12.3306 0.4803 12.7246 1.06066 12.7246H14.9393C15.5297 12.7246 16 12.3384 16 11.8498V4.59939C16 4.11865 15.5197 3.72461 14.9393 3.72461H14.9493Z" fill="#5580E6"></path>
                                            <path d="M9.8286 6.9569C9.83963 7.02307 9.86169 7.0782 9.86169 7.14437C9.86169 7.18848 9.86169 7.24362 9.83963 7.28773C9.8286 7.33184 9.79552 7.37595 9.76244 7.40903C9.72936 7.44211 9.69627 7.46417 9.65216 7.4752C9.60805 7.4752 9.56394 7.49725 9.51983 7.49725H8.76996C8.76996 7.77294 8.67071 8.0376 8.51632 8.26918C8.36194 8.51179 8.13036 8.71028 7.85467 8.84262C7.52384 8.997 7.15993 9.09625 6.78499 9.10728L9.22209 10.3424C9.22209 10.3424 9.2662 10.3754 9.28825 10.3975C9.29928 10.4196 9.32134 10.4416 9.33236 10.4637V10.5409C9.33236 10.5409 9.32134 10.596 9.29928 10.607C9.189 10.7394 9.04565 10.8496 8.88023 10.9158C8.70379 10.982 8.51632 11.004 8.33988 10.982C8.1855 10.9709 8.03111 10.9268 7.88775 10.8607C7.76645 10.7945 7.{totalMrp}12 10.7063 7.52384 10.6291L5.60504 9.06317C5.57196 8.997 5.56093 8.91981 5.56093 8.85364C5.56093 8.78748 5.56093 8.71028 5.60504 8.64412C5.63813 8.57795 5.69327 8.52282 5.75943 8.47871H6.34389C6.7078 8.48973 7.06068 8.40151 7.33637 8.20302C7.45768 8.1148 7.55692 8.00452 7.62309 7.88322C7.68926 7.76191 7.73337 7.62958 7.73337 7.48622H5.25216C5.25216 7.48622 5.19703 7.38698 5.186 7.34287C5.16394 7.2767 5.15291 7.21053 5.14189 7.13334C5.14189 7.08923 5.14189 7.03409 5.16394 6.98998C5.17497 6.94587 5.20805 6.90176 5.24113 6.86868C5.27422 6.84663 5.3073 6.82457 5.35141 6.80252C5.39552 6.79149 5.43963 6.78046 5.48374 6.79149H7.76645C7.74439 6.59299 7.67823 6.39449 7.59001 6.20703H5.24113C5.24113 6.20703 5.186 6.10778 5.17497 6.05264C5.15291 5.98648 5.13086 5.90928 5.13086 5.84312C5.13086 5.79901 5.13086 5.74387 5.15291 5.69976C5.17497 5.65565 5.19702 5.61154 5.23011 5.57845C5.26319 5.54537 5.29627 5.52332 5.34038 5.51229C5.38449 5.51229 5.4286 5.49023 5.47271 5.49023H9.72936C9.72936 5.49023 9.79552 5.58948 9.80655 5.64462C9.80655 5.71079 9.83963 5.76592 9.83963 5.84312C9.83963 5.89825 9.83963 5.94236 9.8286 5.9975C9.81758 6.04161 9.78449 6.09675 9.74038 6.12983C9.7073 6.16292 9.67422 6.17394 9.63011 6.196C9.586 6.20703 9.54189 6.21805 9.49778 6.20703H8.53838C8.61557 6.39449 8.67071 6.59299 8.70379 6.79149H9.72936C9.72936 6.79149 9.78449 6.89074 9.80655 6.94587H9.8286V6.9569Z" fill="white"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1522_56449">
                                                <rect width="16" height="13.25" fill="white" transform="translate(0 1.59961)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class="cash-delivery px-2">Cash On Delivery</span>
                                </div>
                            </h3>
                            <div class="accordion-panel">
                                <p class='error-message'>Cash on delivery is not available in your Pincode.</p>
                            </div>
                        </li> */}
                                                            <li className="accordion-item is-active">
                                                                <h3 className="accordion-thumb ">
                                                                    <div className=" flex align-items-center">
                                                                        <img
                                                                            src="https://images.meesho.com/files/headless/upi_ppr.png"
                                                                            width="20PX"
                                                                        />
                                                                        <span className="order-summary px-2">
                                                                            UPI(GPay/PhonePe/Paytm)
                                                                        </span>
                                                                    </div>
                                                                </h3>
                                                                <div
                                                                    className="accordion-panel p-0 pt-3"
                                                                    style={{ display: "block" }}
                                                                >
                                                                    <div className="plans">
                                                                        {/* <div
                                                                            className={`form-check available-method ${activeTab == 2 && 'active'}`}
                                                                            pay-type="phonepe" onClick={() => handleTabClick(2)}

                                                                        >
                                                                            <label className="form-check-label">
                                                                                <img
                                                                                    src="https://cdn141.picsart.com/363807473021211.png"
                                                                                    className="pay-logo"
                                                                                    alt="button"
                                                                                />
                                                                                <span className="unaviablee">G Pay</span>
                                                                            </label>
                                                                        </div> */}
                                                                        <div
                                                                            className={`form-check available-method ${activeTab == 3 && 'active'}`}
                                                                            pay-type="phonepe" onClick={() => handleTabClick(3)}

                                                                        >
                                                                            <label className="form-check-label">
                                                                                <img
                                                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAbFBMVEVfJJ////9eIZ5VCJq6p9NXD5tYE5zZzuj49Purlsnm3u9bHJ1cGJ5QAJhjK6H+/f+mjsiDX7OfhMOQb7rTx+O3otLg1+vGt9tzRKnJvNyZfL9wQKnBrtiWeL7u6fR0SKp/V7FoM6R3TqyKZ7ey+6qTAAAGyklEQVR4nO2cbZuqIBCGEdJUItK02kprt///H4/am4LJMHD28sM+X3u7AxxmhhlI4CRZp7vivEheWpyLXVpLt28l+I/GRXnMDiRiiiJyyI5lEf82lEy/jichRMQpJZoo5VHz4un4leKGDAEl0022FiHXaYbioVhnGwyXLZRcJkQwPjI+Y6KcCZIsbbnsoOQ5o8w4RMqAMZqd7bBsoNKcCegYDcdLsDz9L1BptQ4RRA+ucF3BsaBQu0rgke5Yotp5haorEroQ3RWSqvYGFZeUOY3SU83XlBCbCoBaXsw2CSoeXpYeoOJceEPqsERuHCwT1PLCfCK1YsbBmoaSiVj5ZiJkJZJpYzoJVV/9LHBVlF0nH8MpqOXB+9Q9xQ5TUzgBtfe7wofiYo+B2vyfqXuKso01lMwF4JtXjaOJfhJE/mm5f4Lampho48OJbFMmNyGQQyq2VlDxzcDUOEmXvLj/U5mskYtP3Mbt6DjUbfqxi8QpWfa+b0eRc8huYChpmLvVVrUy6Td2rLZj62oMyrTGhe6uLdHrKodBbUxrXHzpHzpHOCgiRiyDDrU3mnG6HnEhE4gJGRPTragGBZkIKgqdKkfuSVRoO44KVR8gS5YSfQbjG9Jj5gf1uVGg5BX2f+nI1iUPyHXFrsojqEAl0Dmg0VmjSk9Iw8CSKSiLJ5uKUqdCGgZ1WQ2g4ouFZaZMp9qvcFSry2C/GUBZPkBCGfWWCmkY2MCG9qGWlt845hJtkIZhMIE9qPhivU51l0hWuLHi/QnsQZUIOyOOKlV8xRmGsByDqinmgWbaNl8fUH4Mp/UIVIVbDWKrOmr1CmWuWKVD7QjS+WCZSlVgMmvNz+80qAqd6wm1yHKPMqJhpUKlWM+j/bYflQrnx7ycxycUfqBaqovqi6L8mNdQPaDStVPkGZ2UsYozxJ+k63QAlTtmD1cnxRlFmasw70NJ5xB9RZQZTBHBIGWyB3V2WOYPcaK4yDuEMRbnN5TMPORXOFdm8MveMPBMvqCWY2dRw3er52cjEkJxRvfi/SJszVK6fEEZneDosICoVPbB8/uVowBh3R3jFkoSw+zxg+NRZwDNLXEiH1BGax6NxdbWVCD73Fn1FsroLXqBCtJvwMLvnFkCefb8QAU3gKPVPX8EssV4gjoC5q/bakhrT0zv/EWoLqVDIO+NKvenDwoVHjsoc7DNvx2KDCyh+KmFigH2YyRERwjmioi4gSoAUGOpH3ttQWGOKBqoEmJpqciLtJPizdWpquFMy/cLJWx/bmaFBEeYNxbxdSuuROpbuh6KDBMo8ft1YIwTHQMCd1toKzV9sA3pUKECFb1eAf5MYz5JfbDyekIVSh3nSIGyTg7RQ01SuyD0F6AapJ2dg///oUi0I4VdhPYLUKwg5/lBncliflALAk5S/x5U8gf1B/UH9Qf1B4WBmuU2M8sNeZaui6WTp0bwWoDpxcmzdIebWGMg7WzBiztsGThw5ShNy454CRwsM8NcObNK1WjOGaoNsaDB6EP0e5jEl5kSiztDtcEoLGx/Q1ElW67W6zhDdWE7JMHRU6hWbmRDKneoApgK6kOp1X1x9q4HpTQSzlAxLGnWFxUKVCDLS8jCKAqZoKftl3SDuifNYAm2t/RypyAuFnlV5cl+qZUEW0M90ovmROxAUaVBTcga6pGItTwVVY2CX6hnytr2YI3ZJLBtoZ7JfeuimZGSSm9Qz2MQ6+N/foVnsG2hXgdGxqM17ZOfq7Ydod5Ha/BKvBcVOK9uCfU+hAQc1yqiKyiVHVT/uBZxsA3ofkFA9Q+2MSUA7AfQKmQL1S8BQBVLcHEbaXGUyk5jBTUslsCVlUT8muz6XHGx+Vk5eAnDshJsAQ4XQvzkSdko2dyIEIyrJw4WUGoBDr5UifLGb2nFou7nHZw8tVTJqahrIAcorajLrarLC5Re/oYvFPQFNVYoiC2p9AY1VlKJLD71BjVefIoq0/UHNV6miylo9gf1qaDZuvTbJ9Sn0m98l4k71Ociebt2Ap9QU+0E+JaqHlRhDzXZeIFwjDWFC3uo6RYVcDPPZz2cRxsoUzMPsO1pSsOgAgBlbHvysKzowM2rjWYG0CAGaaUz/kqexvKu2FwJBGmlAzQdGsVIVt31Y9y6YE2H5vZMsyhfRZ2MCxTanmlsZPUoeCOrseXXmyxafgHN0X5k1xwNaCP3wWTXRg4tinZjsm64n+XVBME8L3GY53UX87wYZJ5XqASzvGwmmOe1PMEsLzAK5nnVUzDLS7FazfD6sFYzvGitw5rflXStZnh5X4c1v2sO71yzuxDyyTW3qzOfmtsloy/9n+tY/wG5qnKyNMAIDQAAAABJRU5ErkJggg=="
                                                                                    className="pay-logo"
                                                                                    alt="button"
                                                                                />
                                                                                <span className="unaviablee">PhonePe</span>
                                                                            </label>
                                                                        </div>
                                                                        <div
                                                                            className={`form-check available-method ${activeTab == 4 && 'active'}`}
                                                                            pay-type="paytm" onClick={() => handleTabClick(
                                                                                4
                                                                            )}

                                                                        >
                                                                            <label className="form-check-label">
                                                                                <img
                                                                                    src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
                                                                                    className="pay-logo"
                                                                                    alt="button"
                                                                                />
                                                                                <span className="unaviablee">Paytm</span>
                                                                            </label>
                                                                        </div>
                                                                        <div
                                                                            className={`form-check available-method ${activeTab == 1 && 'active'}`}
                                                                            pay-type="bhim_upi"
                                                                            onClick={() => handleTabClick(1)}

                                                                        >
                                                                            <label className="form-check-label">
                                                                                <img
                                                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMDjlc4aJzqc4vfL9BFw9hxrZk0nRyBAHwc95tUX_rlJMvwdHwHUU4FwuqQ&s"
                                                                                    className="pay-logo"
                                                                                    alt="button"
                                                                                />
                                                                                <span className="unaviablee">BHIM UPI</span>
                                                                            </label>
                                                                        </div>
                                                                        <div
                                                                            className={`form-check available-method ${activeTab == 5 && 'active'}`}
                                                                            pay-type="whatspp_pay" onClick={() => handleTabClick(5)}
                                                                        >
                                                                            <label className="form-check-label">
                                                                                <img
                                                                                    src="https://static.xx.fbcdn.net/assets/?revision=1431132240730458&name=Illustrations-Get-Started&density=1"
                                                                                    className="pay-logo"
                                                                                    alt="button"
                                                                                />
                                                                                <span className="unaviablee">WhatsppPay</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            {/* <li class="accordion-item ">
                        <h3 class="accordion-thumb">
                            <div class=" flex align-items-center">
                                <img src="https://pdp.gokwik.co/assets/icons/cart.svg" alt="">
                                <span class="order-summary px-2">Shipping Address</span>
                            </div>
                        </h3>
                        <div class="accordion-panel customer-address"></div>
                    </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="cart__footer">
                                                        <div className="cart__price__details">
                                                            <div className="cart__breakup__inner">
                                                                <div className="shipping__total">
                                                                    <span className="">Shipping:</span>
                                                                    <span className="">FREE</span>
                                                                </div>
                                                                <div className="cart__total">
                                                                    <span className="">Total Product Price:</span>
                                                                    <span className="cartTotalAmount">₹{totalMrp}.00</span>
                                                                </div>
                                                                <div className="sc-bBXxYQ jMfCEJ mt-3 mb-1" />
                                                                <div className="mc_pay__total">
                                                                    <span className="">Order Total :</span>
                                                                    <span className="cartTotalAmount">₹{totalMrp}.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc-lgVVsH ixHOyU">
                                                        <div className="sc-hQRsPl eGwEyP">
                                                            <div className="sc-fThYeS dUijPM">
                                                                <span className="cartTotalAmount">₹{totalMrp}.00</span>
                                                                <button className="sc-kLLXSd ylmAj">
                                                                    VIEW PRICE DETAILS
                                                                </button>
                                                            </div>
                                                            <div className="sc-BrFsL iAFVK">
                                                                <button
                                                                    className="sc-ikZpkk bwHzRF"
                                                                    onclick="   ()"
                                                                >
                                                                    <a href={payment.trim()} className="text-light"
                                                                    >Order Now</a>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form method="post" id="paymentForm">
                                                        <input
                                                            type="hidden"
                                                            id="price"
                                                            name="price"
                                                            defaultValue=""
                                                        />
                                                        <input
                                                            type="hidden"
                                                            id="product_name"
                                                            name="product_name"
                                                            defaultValue=""
                                                        />
                                                        <input
                                                            type="hidden"
                                                            id="customerName"
                                                            name="customerName"
                                                            defaultValue=""
                                                        />
                                                        <input
                                                            type="hidden"
                                                            id="customerMobile"
                                                            name="customerMobile"
                                                            defaultValue=""
                                                        />
                                                        <button
                                                            className="btn btn-dark d-none"
                                                            value="submit"
                                                            id="submitForm"
                                                            name="submit"
                                                            type="submit"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mySidenav" className="sidenav" style={{ right: "-100%" }}>
                    <div className="sidenav-div">
                        <div className="drawer__title">
                            <img
                                src="https://kurti.valentine-deal.shop/assets/website/images/M favicon.png"
                                className="_31Y9yB logo-icon"
                                style={{ width: "auto", height: 30 }}
                            />
                            <h3 className="ui2-heading">
                                <span>
                                    <b>Your Cart</b>
                                </span>
                            </h3>
                            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
                                ×
                            </a>
                        </div>
                    </div>
                    <div className="cart-products-list">
                        <div className="cart-product cart-product-index-0">
                            {" "}
                            <div className="cart-product-img">
                                {" "}
                                <img
                                    src="https://img.myshopline.com/image/store/1704689667447/Untitleddesign-33a560e5-6897-4b88-ad92-96bc756f6d57.png?w=1080&h=1080"
                                    alt=""
                                />{" "}
                            </div>{" "}
                            <div className="cart-product-details">
                                {" "}
                                <div className="cart-product-title">
                                    {" "}
                                    <p>COMBO OF 3 SUIT SETS 3</p>{" "}
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107"
                                        className="remove-cart-item"
                                        data-index={0}
                                        alt=""
                                    />{" "}
                                </div>{" "}
                                <div className="cart-product-pricing">
                                    {" "}
                                    <p className="cart-product-price">₹335</p>&nbsp;{" "}
                                    <span className="cart-product-mrp">₹2999</span>{" "}
                                </div>{" "}
                                <div className="cart-product-description">
                                    {" "}
                                    <p className="cart-product-color">Size :S</p>{" "}
                                    <span className="sc-lbxAil evmCQI" />{" "}
                                    <div className="cart-qty-wrapper">
                                        {" "}
                                        <span className="minus" data-index={0}>
                                            -
                                        </span>{" "}
                                        <span className="num">01</span>{" "}
                                        <span className="plus" data-index={0}>
                                            +
                                        </span>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>
                        <div className="cart-product cart-product-index-1">
                            {" "}
                            <div className="cart-product-img">
                                {" "}
                                <img
                                    src="https://img.myshopline.com/image/store/1704689667447/Untitleddesign-a84dd8a5-e871-49f4-ac09-2527b52bace4.png?w=1080&h=1080"
                                    alt=""
                                />{" "}
                            </div>{" "}
                            <div className="cart-product-details">
                                {" "}
                                <div className="cart-product-title">
                                    {" "}
                                    <p>COMBO OF 3 SUIT SETS 1</p>{" "}
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107"
                                        className="remove-cart-item"
                                        data-index={1}
                                        alt=""
                                    />{" "}
                                </div>{" "}
                                <div className="cart-product-pricing">
                                    {" "}
                                    <p className="cart-product-price">₹299</p>&nbsp;{" "}
                                    <span className="cart-product-mrp">₹2999</span>{" "}
                                </div>{" "}
                                <div className="cart-product-description">
                                    {" "}
                                    <p className="cart-product-color">Size :S</p>{" "}
                                    <span className="sc-lbxAil evmCQI" />{" "}
                                    <div className="cart-qty-wrapper">
                                        {" "}
                                        <span className="minus" data-index={1}>
                                            -
                                        </span>{" "}
                                        <span className="num">01</span>{" "}
                                        <span className="plus" data-index={1}>
                                            +
                                        </span>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>
                    </div>
                    <div className="cart__footer" style={{}}>
                        <div className="cart__price__details">
                            <div className="cart__breakup__inner">
                                <div className="cart__total">
                                    <span className="">Cart Total:</span>
                                    <span className="cartTotalAmount">₹{totalMrp}.00</span>
                                </div>
                                <div
                                    className="shipping__total"
                                    style={{ borderBottom: "1px dashed #000" }}
                                >
                                    <span className="">Shipping:</span>
                                    <span className="">FREE</span>
                                </div>
                                <div className="mc_pay__total">
                                    <span className="">To Pay:</span>
                                    <span className="cartTotalAmount">₹{totalMrp}.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart__checkout">
                            <div className="cart__final__payment">
                                <h2 className="cart__final__price cartTotalAmount">₹{totalMrp}.00</h2>
                                <p className="cart__tax__text">Inclusive of all taxes</p>
                            </div>
                            <a
                                href="/cart"
                                className="btn btn-dark cart__confirm__order"
                            >
                                Confirm Order
                            </a>
                        </div>
                    </div>
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n                    .steps.svelte-idjy9v .steps-inner .step.active .info-wrap .circle-box.svelte-idjy9v {\n                        border-color: #000000;\n                        color: #000000;\n                        background: #fff;\n                    }\n\n\n                    .steps.svelte-idjy9v .steps-inner .step.active .info-wrap .title.svelte-idjy9v {\n                        color: #000000;\n                    }\n\n                    .steps.svelte-idjy9v .steps-inner .step.svelte-idjy9v:last-child {\n                        justify-content: center;\n                    }\n\n                    .steps.svelte-idjy9v.svelte-idjy9v {\n                        padding: 2.3rem 1.2rem 0.5rem;\n\n                    }\n\n                    ._2dxSCm .search-div:before {\n                        background: url('https://kurti.valentine-deal.shop/assets/images/theme/search.svg');\n                    }\n                "
                    }}
                />
                <use-chat-gpt-ai-content-menu id="USE_CHAT_GPT_AI_ROOT_Context_Menu" />
                <use-chat-gpt-ai
                    id="USE_CHAT_GPT_AI_ROOT"
                    data-version="3.0.0"
                    style={{ display: "none" }}
                />
                <max-ai-minimum-app
                    id="USE_CHAT_GPT_AI_ROOT_Minimize_Container"
                    data-version="3.0.0"
                />
                <div
                    id="MAXAI_SNACKBAR_CONTAINER"
                    style={{ zIndex: 2147483647, color: "rgb(255, 255, 255)" }}
                />
                <iframe
                    id="sbox"
                    src="chrome-extension://afhdhdllpdmajoopkogfdmdfdgmpjipp/js/sandbox.html"
                    style={{ display: "none" }}
                />
            </></Layout>
    );
};


export default Payments
