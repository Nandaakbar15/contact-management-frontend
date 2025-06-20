import React from "react";

export default function Button({children}) {
    return (
        <div className="button-body">
            {children}
        </div>
    );
}

export function BtnAdd() {
    return (
        <div className="button-add">
            <button type="submit" className="btn btn-primary">Tambah!</button>
        </div>
    )
}

export function BtnChange() {
    return (
        <div className="button-update">
            <button type="submit" className="btn btn-info">Ubah!</button>
        </div>
    );
}

export function BtnDelete({onClick}) {
    return (
        <div className="button-delete">
            <button type="submit" className="btn btn-danger" onClick={onClick}>Hapus!</button>
        </div>
    );
}