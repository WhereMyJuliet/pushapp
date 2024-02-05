import React from "react";

const user = {
    name: "Ledy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
};

const additionalUser = {
    name: "Первая женщина на Руси",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1klwm9EvUceRc9aGAKUb5rjNJHFYbatE5nMJNC02hvn_-OqTSq-oKgSENhVSs-tZzfs&usqp=CAU", // Замените ссылку на новое фото
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{ width: user.imageSize, height: user.imageSize }}
            />

            <h1>{additionalUser.name}</h1>
            <img
                className="avatar"
                src={additionalUser.imageUrl}
                alt={"Photo of " + additionalUser.name}
                style={{ width: additionalUser.imageSize, height: additionalUser.imageSize }}
            />
        </>
    );
}
