import { useState } from "react";
import NewShortcut from "./newShortcut";
import NewShortcutCategory from "./newShortcutCategory";

//hardcoded slop for first iteration and making initial page function
//TODO: Rip out components for shortcutCategory and shortcut. Must remove hardcoded svgs and URLs and store this data instead such that users can fetch and create their own shortcuts
const ShortcutSection = ({unlocked}: {unlocked: boolean}) => {

    const [pastedSvg, setPastedSvg] = useState<string>("");

    const handleSetSvgTest = () => {
        let modifiedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M480-720q-33 0-56.5-23.5T400-800t23.5-56.5T480-880t56.5 23.5T560-800t-23.5 56.5T480-720M360-80v-520q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5 174-9.5T820-720l20 80q-56 15-118 25t-122 15v520h-80v-240h-80v240z"/></svg>';
        modifiedSvg = modifiedSvg.replace(/(width|height)=".*?"/g, "");
        modifiedSvg = modifiedSvg.replace(
        /<svg/,
        `<svg width="48" height="48"`
        );

        setPastedSvg(modifiedSvg)
    }

    return (
      <div className="w-6/12">
        <div className="flex flex-col ml-12">
            
                <div className="p-4">
                    <h2>Dev</h2>
                    <div className="flex justify-start items-center">
                        <div className="p-4">
                            <a href="https://chatgpt.com/">
                                <svg  role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Openai--Streamline-Simple-Icons" height="48" width="48"><desc>Openai Streamline Icon: https://streamlinehq.com</desc><title>OpenAI</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0 -0.5157 -4.9108 6.0462 6.0462 0 0 0 -6.5098 -2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0 -3.9977 2.9 6.0462 6.0462 0 0 0 0.7427 7.0966 5.98 5.98 0 0 0 0.511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718 -4.2058 5.9894 5.9894 0 0 0 3.9977 -2.9001 6.0557 6.0557 0 0 0 -0.7475 -7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1 -2.8764 -1.0408l0.1419 -0.0804 4.7783 -2.7582a0.7948 0.7948 0 0 0 0.3927 -0.6813v-6.7369l2.02 1.1686a0.071 0.071 0 0 1 0.038 0.052v5.5826a4.504 4.504 0 0 1 -4.4945 4.4944zm-9.6607 -4.1254a4.4708 4.4708 0 0 1 -0.5346 -3.0137l0.142 0.0852 4.783 2.7582a0.7712 0.7712 0 0 0 0.7806 0l5.8428 -3.3685v2.3324a0.0804 0.0804 0 0 1 -0.0332 0.0615L9.74 19.9502a4.4992 4.4992 0 0 1 -6.1408 -1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655 -1.9728V11.6a0.7664 0.7664 0 0 0 0.3879 0.6765l5.8144 3.3543 -2.0201 1.1685a0.0757 0.0757 0 0 1 -0.071 0l-4.8303 -2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a0.0757 0.0757 0 0 1 0.071 0l4.8303 2.7913a4.4944 4.4944 0 0 1 -0.6765 8.1042v-5.6772a0.79 0.79 0 0 0 -0.407 -0.667zm2.0107 -3.0231 -0.142 -0.0852 -4.7735 -2.7818a0.7759 0.7759 0 0 0 -0.7854 0L9.409 9.2297V6.8974a0.0662 0.0662 0 0 1 0.0284 -0.0615l4.8303 -2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02 -1.1638a0.0804 0.0804 0 0 1 -0.038 -0.0567V6.0742a4.4992 4.4992 0 0 1 7.3757 -3.4537l-0.142 0.0805L8.704 5.459a0.7948 0.7948 0 0 0 -0.3927 0.6813zm1.0976 -2.3654 2.602 -1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997 -2.6067 -1.4997Z" fill="#e5e7eb" stroke-width="1"></path></svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://github.com/">
                            <svg height="48" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="48" data-view-component="true">
                                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" fill="#e5e7eb"></path>
                            </svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://nerdcave.com/tailwind-cheat-sheet">
                                <svg role="img" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" id="Tailwindcss--Streamline-Simple-Icons" height="48" width="48"><desc>Tailwindcss Streamline Icon: https://streamlinehq.com</desc><title>Tailwind CSS</title><path d="M24.002 9.6c-6.4 0 -10.4 3.2 -12 9.6 2.4 -3.2 5.2 -4.4 8.4 -3.6 1.826 0.456 3.13 1.78 4.576 3.248C27.332 21.236 30.054 24 36.002 24c6.4 0 10.4 -3.2 12 -9.6 -2.4 3.2 -5.2 4.4 -8.4 3.6 -1.826 -0.456 -3.13 -1.78 -4.576 -3.248C32.674 12.364 29.952 9.6 24.002 9.6zm-12 14.4c-6.4 0 -10.4 3.2 -12 9.6 2.4 -3.2 5.2 -4.4 8.4 -3.6 1.826 0.456 3.13 1.78 4.576 3.248 2.354 2.388 5.076 5.152 11.024 5.152 6.4 0 10.4 -3.2 12 -9.6 -2.4 3.2 -5.2 4.4 -8.4 3.6 -1.826 -0.456 -3.13 -1.78 -4.576 -3.248C20.674 26.764 17.952 24 12.002 24z" fill="#e5e7eb" stroke-width="1"></path></svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://json2csharp.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M400-280h160v-80H400zm0-160h280v-80H400zM280-600h400v-80H280zM80-80v-80h102q-48-23-77.5-68T75-330q0-79 55.5-134.5T265-520v80q-45 0-77.5 32T155-330q0 39 24 69t61 38v-97h80v240zm320-40v-80h360v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120z"  fill="#e5e7eb" stroke-width="1" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="p-4">
                    <h2>Entertainment</h2>
                    <div className="flex justify-start items-center">
                    <div className="p-4">
                        <a href="https://reddit.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-reddit" viewBox="0 0 16 16">
                                <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
                            </svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://youtube.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"> </path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://www.op.gg/summoners/na/TheLurkingOne-NA1/">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 16" width="48" height="16" fill="none"><path fill="currentColor" fill-rule="evenodd" preserveAspectRatio="none"  d="M8.025 12.203C5.7 12.203 3.808 10.318 3.808 8S5.7 3.796 8.025 3.796 12.241 5.682 12.241 8s-1.891 4.203-4.216 4.203M8.025 0C3.6 0 0 3.589 0 8s3.6 8 8.025 8 8.025-3.589 8.025-8-3.6-8-8.025-8m17.517 8.498H21.18V3.7h4.362c1.505 0 1.964 1.412 1.964 2.398 0 1.017-.46 2.399-1.964 2.399m5.754-2.399c0-3.44-2.357-6.096-5.736-6.096h-7.98v15.984h3.6v-3.792h4.38c3.258 0 5.736-2.638 5.736-6.096m10.656.938H49.1c.018.2.04.516.055.96.027.744-.013 1.2-.163 2.098-.608 3.635-3.43 5.894-7.365 5.894-4.421 0-8.018-3.585-8.018-7.992 0-4.408 3.597-7.994 8.017-7.994a8.01 8.01 0 0 1 6.135 2.85l.226.268-.292.194-2.593 1.724-.216.144-.182-.186c-.82-.835-1.912-1.224-3.078-1.224-2.375 0-4.308 1.855-4.308 4.224 0 2.367 1.933 4.294 4.309 4.294 2.008 0 3.34-1.13 3.6-2.392h-3.275zm23.986.002h-7.15v2.862h3.277c-.261 1.26-1.593 2.392-3.602 2.392-2.375 0-4.308-1.927-4.308-4.295s1.933-4.223 4.308-4.223c1.165 0 2.258.389 3.078 1.224l.182.186.217-.144 2.592-1.724.293-.194-.227-.268a8.01 8.01 0 0 0-6.135-2.85c-4.42 0-8.017 3.586-8.017 7.993 0 4.408 3.596 7.993 8.017 7.993 3.936 0 6.758-2.258 7.366-5.894.15-.898.19-1.354.163-2.098-.015-.444-.037-.76-.055-.96m-36.269 7.326a1.626 1.626 0 0 1 3.254 0 1.626 1.626 0 0 1-3.254 0" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://u.gg/lol/tier-list/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 80 27" width="48"><path fill="#e5e7eb" fill-rule="evenodd" d="M25.254 25.905a1.958 1.958 0 0 1-.59-1.43c0-.558.196-1.034.59-1.431a1.941 1.941 0 0 1 1.434-.596c.562 0 1.04.198 1.434.596.393.397.59.873.59 1.43 0 .557-.197 1.034-.59 1.43a1.945 1.945 0 0 1-1.434.596c-.563 0-1.04-.199-1.434-.595zM54.214 10.069V9.96c0-4.408-2.248-6.611-6.744-6.611h-5.973c-4.495 0-6.743 2.203-6.743 6.61v9.929c0 4.408 2.248 6.611 6.743 6.611h5.973c4.496 0 6.744-2.203 6.744-6.611v-5.43h-8.998l-1.56 3.439h6.704v1.99c0 2.142-.963 3.212-2.89 3.212h-5.973c-1.926 0-2.89-1.07-2.89-3.211V9.96c0-2.14.964-3.211 2.89-3.211h5.973c1.927 0 2.89 1.07 2.89 3.21v1.809l3.854-1.7zm25.786 0V9.96c0-4.408-2.249-6.611-6.744-6.611h-5.973c-4.496 0-6.744 2.203-6.744 6.61v9.929c0 4.408 2.248 6.611 6.744 6.611h5.973c4.495 0 6.743-2.203 6.743-6.611v-5.43h-8.997l-1.56 3.439h6.704v1.99c0 2.142-.963 3.212-2.89 3.212h-5.973c-1.927 0-2.89-1.07-2.89-3.211V9.96c0-2.14.963-3.211 2.89-3.211h5.973c1.927 0 2.89 1.07 2.89 3.21v1.809l3.853-1.7zM15.226 2.696v18.097c-1.806 1.02-3.7 1.536-5.632 1.536-1.932 0-3.826-.516-5.632-1.536V2.696L0 4.448v18.519l.883.59c2.674 1.788 5.686 2.733 8.711 2.733 3.025 0 6.037-.945 8.712-2.733l.882-.59V4.448l-3.962-1.752z" clip-rule="evenodd"/><path fill="#e5e7eb" fill-rule="evenodd" d="M9.493 0 7.512.876v12.966a7.164 7.164 0 0 0 1.98.284c.664 0 1.326-.095 1.982-.284V.876L9.493 0z" clip-rule="evenodd"/></svg>                        
                            </a>  
                        </div>
                            
                    </div>
                </div>

                <div className="p-4">
                    <h2>Utilities</h2>
                    <div className="flex justify-start">
                    <div className="p-4">
                        <a href="https://drive.google.com/drive/home">
                            <svg role="img" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" id="Googledrive--Streamline-Simple-Icons" height="48" width="48"><desc>Googledrive Streamline Icon: https://streamlinehq.com</desc><title>Google Drive</title><path d="M24.02 2.97c-4.164 0 -7.508 0.04 -7.486 0.094 0.02 0.04 3.416 6.002 7.548 13.24l7.52 13.148h7.52c4.162 0 7.506 -0.04 7.484 -0.094 -0.01 -0.04 -3.416 -6.002 -7.55 -13.24l-7.52 -13.148zm-9.52 3.46a1579.656 1579.722 0 0 0 -7.26 12.638L0 31.736l3.78 6.596 3.77 6.594 7.24 -12.67 7.236 -12.66 -3.76 -6.574C16.2 9.408 14.51 6.44 14.5 6.428zm4.518 25.306 -0.406 0.696c-0.228 0.396 -1.92 3.344 -3.76 6.574a847.86 847.896 0 0 1 -3.396 5.94c-0.02 0.052 6.48 0.084 14.444 0.084h14.488l3.592 -6.314c1.984 -3.468 3.7 -6.46 3.812 -6.646l0.208 -0.334h-14.498z" fill="#e5e7eb" stroke-width="1"></path></svg>
                        </a>
                        </div>
                        <div className="p-4">
                            <a href="https://photos.google.com/">
                            <svg role="img" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" id="Pixabay--Streamline-Simple-Icons" height="48" width="48"><desc>Pixabay Streamline Icon: https://streamlinehq.com</desc><title>Pixabay</title><path d="M11.254 20.468a1.776 1.776 0 0 1 -1.774 -1.776H3.4c0 0.98 -0.796 1.776 -1.776 1.776H0v18.894h31.12v-18.894H11.28zm-1.772 5.592h-6.08v-2.646h6.08v2.646zm10.688 10.468a6.542 6.542 0 0 1 -6.534 -6.538c0 -3.604 2.932 -6.386 6.534 -6.386s6.534 2.78 6.534 6.386a6.542 6.542 0 0 1 -6.534 6.538zm3.512 -6.538c0 1.938 -1.576 3.514 -3.512 3.514a3.518 3.518 0 0 1 -3.512 -3.514c0 -1.938 1.576 -3.514 3.512 -3.514s3.512 1.576 3.512 3.514zM48 19.002l-7.86 20.312 -6.328 -2.452V33.4l4.484 1.738 5.53 -14.292L23.1 12.814l-1.92 4.964H17.72l3.538 -9.14L48 19.002Z" fill="#e5e7eb" stroke-width="1"></path></svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://music.youtube.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
                                <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                                <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
                                <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                            </svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://calendar.google.com/calendar/u/0/r">
                            <svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="p-4" onClick={() => handleSetSvgTest()}>
                    <h2>Financial</h2>
                    <div className="flex justify-start">
                        <div className="p-4">
                            <a href="https://home.personalcapital.com/page/login/goHome?optimizelyEndUserId=oeu1736354599214r0.8685067685129132">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" /><path d="M2 9v1c0 1.1.9 2 2 2h1" /><path d="M16 11h.01" /></svg>
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="https://app.rocketmoney.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                            </a>
                        </div>
                        {unlocked &&
                            <NewShortcut/>
                        }
                    </div>
                </div>

                
                <div className="p-4">
                    <h2>Test</h2>
                    <div className="flex justify-start">
                        {pastedSvg && unlocked ? 
                            (
                                <div className="p-4">
                                    <a href="https://google.com/">
                                        <div 
                                            className="w-12 h-12 fill-[#e5e7eb]"
                                            dangerouslySetInnerHTML={{__html: pastedSvg}}
                                        />
                                    </a>
                                </div>
                            ) :
                            (
                                <p>No SVG selected yet</p>
                            )}
                    </div>
                </div>

                {unlocked &&
                    <NewShortcutCategory/>
                }

        </div>
      </div>
    )
  }
  
  export default ShortcutSection