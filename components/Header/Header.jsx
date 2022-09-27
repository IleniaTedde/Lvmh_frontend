import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import Link from "next/link";
import { StyleRegistry } from "styled-jsx";

const Header = ({ }) => {

  return (
    <>
      <header className={StyleRegistry.Header}>
         HEADER
      </header>
    </>
  );
};

export default Header;


