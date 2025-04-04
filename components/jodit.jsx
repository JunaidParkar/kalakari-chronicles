import { useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'

const Jodit = ({ content, setContent }) => {
  const editor = useRef(null)

  return (
    <JoditEditor
       ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
    />
  )
}
export default Jodit