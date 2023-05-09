const { useState, useEffect } = require("react")
import { useDispatch } from 'react-redux';
import { saveFile } from '../redux/fileSlices';
import { filesService } from '../services/servicesFiles'


export const useFiles = () => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState([])
    const [isLoadingFiles, setIsLoadingFiles] = useState(false)
    const [error, setError] = useState(null)

    const handlerQueryFile = (value) => {

        setIsLoadingFiles(true)
        filesService.getFileByName(value)
            .then((dataResult) => {
                const result = dataResult.payload.filter(lines => {
                    return lines.lines && lines.lines.length > 0
                });
                dispatch(saveFile(result))
                setFiles(result)
            }).finally(() => {
                setIsLoadingFiles(false)
            })

    }

    useEffect(() => {

        setIsLoadingFiles(true)

        filesService.getFiles()
            .then((resultFiles) => {
                if (resultFiles && resultFiles.payload) {
                    const result = resultFiles.payload.filter(lines => {
                        return lines.lines && lines.lines.length > 0
                    });
                    setFiles(result)
                    dispatch(saveFile(result))
                }
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setIsLoadingFiles(false)
            })
    }, [])

    return {
        files,
        isLoadingFiles,
        error,
        handlerQueryFile
    }
}
