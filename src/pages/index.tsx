import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import getJoke, { Joke } from "@/api/jokeData";
import Jokes from "@/components/Jokes";
