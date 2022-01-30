import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({ room: "", client: "" });
	function func(event) {
		setState((prev) => {
			console.log(event.target.name);
			if (event.target.name === "room")
				return { ...prev, room: event.target.value };
			else {
				return { ...prev, client: event.target.value };
			}
		});
	}
	function login() {
		localStorage.setItem("room", state.room);
		localStorage.setItem("name", state.client);
		navigate("/");
	}
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				flexDirection: "column",
			}}
		>
			<TextField label="Room Code" name="room" onChange={func} />
			<TextField
				label="Name"
				name="name"
				style={{ marginTop: "10px" }}
				onChange={func}
			/>
			<Button
				color="primary"
				variant="contained"
				style={{ marginTop: "10px" }}
				onClick={login}
			>
				Join
			</Button>
		</div>
	);
};

export default Login;