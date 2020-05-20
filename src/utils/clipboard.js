import Clipboard from 'clipboard'

// 点击复制
export default function handleClipboard(text,event){
    const clipboard =  new Clipboard(event.target,{
        text:()=>text
    })
    clipboard.on('success',() => {
        clipboard.destroy()
    })
    clipboard.on('error',() =>{
        clipboard.destroy()
    })
    clipboard.onClick(event)
}