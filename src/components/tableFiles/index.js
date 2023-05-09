"use client"; // this is a client component

import Spinner from "../spinner";
import { useFiles } from '../../hooks/useFiles';
import { useSnackbar } from 'notistack';
import { useSelector } from "react-redux";

export default function TableFiles() {
    const { enqueueSnackbar } = useSnackbar();
    const { isLoadingFiles, error } = useFiles()
    const fileData = useSelector((state) => state.file);

    return (
        <>
        {isLoadingFiles && <Spinner />}
        {error && enqueueSnackbar(error, { variant: "warning" })}
        {fileData.file.length == 0 && (
                <div className="alert alert-warning" role="alert">
                    Files not found!
                </div>
            )}
        <table className="table table-striped table-hover table-bordered">
           
            <thead>
                <tr>
                    <th scope="col">File Name</th>
                    <th scope="col">Text</th>
                    <th scope="col">Number</th>
                    <th scope="col">Hexadecimal</th>
                </tr>
            </thead>
            <tbody>
                {fileData && fileData.file.map((item, ind) => {
                    let linesToShow
                    const { lines } = item
                    if (lines && lines.length > 0) {
                        linesToShow = lines.map((element, i) => {
                            return (
                                <tr key={'tr_' + ind + i}>
                                    <th scope="row">{item.file}</th>
                                    <td>{element.text}</td>
                                    <td>{element.number}</td>
                                    <td>{element.hex}</td>
                                </tr>
                            )
                        });
                    }
                    return linesToShow
                })}
            </tbody>
        </table>
        </>

    )
}