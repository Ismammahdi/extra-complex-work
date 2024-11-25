import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import Category from "../pages/category/Category";
import Allissues from "../pages/Allissues";
import SeptemBor from "../pages/SeptemBor";
import Agost from "../pages/Agost";
import Julie from "../pages/Julie";
import June from "../pages/June";
import More from "../pages/More";
import MoreClick from "../pages/MoreClick";
import AnwarulQuaran from "../pages/home/AnwarulQuaran";
import CommonMistakes from "../pages/CommonMistakes";
import Lekhok from "../pages/Lekhok";
import Faq from "../pages/Faq";
import StudentPage from "../pages/StudentPage";
import BivagMore from "../pages/BivagMore";
import StudentAdvice from "../pages/StudentAdvice";
import Youth from "../pages/Youth";
import Women from "../pages/Women";
import Current from "../pages/Current";
import Malek from "../pages/lekhok/Malek";

import CurrentDayNight from "../pages/CurrentDayNight";
import ReaderPage from "../pages/ReaderPage";
import Saiful from "../pages/lekhok/Saiful";
import Motin from "../pages/lekhok/Motin";
import News from "../pages/News";
import Abdullah from "../pages/lekhok/Abdullah";
import Sorif from "../pages/lekhok/Sorif";
import Tanjim from "../pages/lekhok/Tanjim";
import Tajib from "../pages/lekhok/Tajib";
import Masum from "../pages/lekhok/Masum";
import Jolil from "../pages/lekhok/Jolil";
import LekhokBrindo from "../pages/lekhok/LekhokBrindo";
import Nadvi from "../pages/otherAuthor/Nadvi";
import Hasan from "../pages/otherAuthor/Hasan";
import Usman from "../pages/otherAuthor/Usman";
import Toki from "../pages/otherAuthor/Toki";

import Hai from "../pages/otherAuthor/Hai";
import Mesbah from "../pages/otherAuthor/Mesbah";
import Said from "../pages/otherAuthor/Said";
import Saber from "../pages/otherAuthor/Saber";
import Obayed from "../pages/otherAuthor/Obayed";
import Khalid from "../pages/otherAuthor/Khalid";
import Hemayet from "../pages/otherAuthor/Hemayet";
import Fojlul from "../pages/otherAuthor/Fojlul";
import Yahia from "../pages/otherAuthor/Yahia";

import SayedAhmed from "../pages/otherAuthor/SayedAhmed";
import SibbirAhmed from "../pages/otherAuthor/SibbirAhmed";
import Johiruddin from "../pages/otherAuthor/Johiruddin";
import TohaHosain from "../pages/otherAuthor/TohaHosain";
import Fahad from "../pages/otherAuthor/Fahad";
import Hasibur from "../pages/otherAuthor/Hasibur";
import Enamul from "../pages/otherAuthor/Enamul";
import Diloar from "../pages/otherAuthor/Diloar";
import SaifulIslam from "../pages/otherAuthor/SaifulIslam";
import SpatialEdition from "../pages/edition/SpatialEdition";
import Ideologi from "../pages/edition/Ideologi";
import Baitul from "../pages/edition/Baitul";
import TextBook from "../pages/edition/TextBook";
import Alzajira from "../pages/edition/Alzajira";
import Sahadat from "../pages/edition/Shadat";
import Blind from "../pages/edition/Blind";
import ImanAkaid from "../pages/akaid/ImanAkaid";
import Reform from "../pages/edition/Reform";
import Mordanisam from "../pages/edition/Mordanisam";
import Servent from "../pages/edition/Servent";
import Fault from "../pages/edition/Fault";
import AfterNews from "../pages/edition/AfterNews";
import DictatorShip from "../pages/edition/DictatorShip";
import Brave from "../pages/edition/Brave";
import Hera from "../pages/edition/Hera";
import Biography from "../pages/edition/Biography";
import Gaza from "../pages/edition/gaza";
import Ruler from "../pages/edition/Ruler";
import Akol from "../pages/edition/Akol";
import Kota from "../pages/edition/Kota";
import Iman from "../pages/edition/Iman";
import Filistin from "../pages/edition/Filistin";
import Kurbani from "../pages/edition/Kurbani";
import Soriot from "../pages/edition/Soriot";
import Son from "../pages/edition/Son";
import SurahName from "../pages/edition/SurahName";
import QuestionAns from "../pages/edition/QuestionAns";
import ButtonsMore from "../buttons/ButtonsMore";
import Poriciti from "../pages/Poriciti.jsx/Poriciti";
import ApnarZiggasa from "../pages/ApnarZiggasa";
import StudentSylebus from "../pages/StudentSylebus/StudentSylebus";
import Question from "../pages/Question/Question";
import Agent from "../pages/AgentPage/Agent";
import Connection from "../pages/Connection.jsx/Connection";
import MonthlyIssues from "../pages/Issuse/MonthlyIssues";

const mainRoutes = [
  // main page
  { path: "/", element: <Home /> },
  { path: "/ismam", element: <Category /> },
  { path: "/issues/:month", element: <MonthlyIssues /> },
  { path: "/allIssues", element: <Allissues /> },
  { path: "/septembor", element: <SeptemBor /> },
  { path: "/agost", element: <Agost /> },
  { path: "/julie", element: <Julie /> },
  { path: "/june", element: <June /> },
  { path: "/more", element: <More /> },
  { path: "/moreclick", element: <MoreClick /> },
  { path: "/anwarul-quran", element: <AnwarulQuaran /> },
  { path: "/common-mistakes", element: <CommonMistakes /> },
  { path: "/faq", element: <Faq /> },
  { path: "/student-page", element: <StudentPage /> },
  { path: "/bivag-more", element: <BivagMore /> },
  { path: "/education-advice", element: <StudentAdvice /> },
  { path: "/youth", element: <Youth /> },
  { path: "/women", element: <Women /> },
  { path: "/current", element: <Current /> },
  { path: "/center-day-night", element: <CurrentDayNight /> },
  { path: "/reader-page", element: <ReaderPage /> },
  { path: "/news", element: <News /> },
  { path: "/malek", element: <Malek /> },
  { path: "/saiful", element: <Saiful /> },
  { path: "/motin", element: <Motin /> },
  { path: "/al-abdulah", element: <Abdullah /> },
  { path: "/sorif", element: <Sorif /> },
  { path: "/tanjim", element: <Tanjim /> },
  { path: "/tajib", element: <Tajib /> },
  { path: "/masum", element: <Masum /> },
  { path: "/jolil", element: <Jolil /> },
  { path: "/lekhok-brindo", element: <LekhokBrindo /> },
  { path: "/nadvi", element: <Nadvi /> },
  { path: "/hasan", element: <Hasan /> },
  { path: "/usman", element: <Usman /> },
  { path: "/toki", element: <Toki /> },
  { path: "/hai", element: <Hai /> },
  { path: "/mesbah", element: <Mesbah /> },
  { path: "/said", element: <Said /> },
  { path: "/saber", element: <Saber /> },
  { path: "/obayed", element: <Obayed /> },
  { path: "/khalid", element: <Khalid /> },
  { path: "/hemayet", element: <Hemayet /> },
  { path: "/fojlul", element: <Fojlul /> },
  { path: "/yahia", element: <Yahia /> },
  { path: "/sayed-ahmed", element: <SayedAhmed /> },
  { path: "/sabbir-ahmed", element: <SibbirAhmed /> },
  { path: "/johir", element: <Johiruddin /> },
  { path: "/toha", element: <TohaHosain /> },
  { path: "/fahad", element: <Fahad /> },
  { path: "/hasibur", element: <Hasibur /> },
  { path: "/enamul", element: <Enamul /> },
  { path: "/diloar", element: <Diloar /> },
  { path: "/saifulislam", element: <SaifulIslam /> },
  { path: "/spatialedition", element: <SpatialEdition /> },
  { path: "/ideologi", element: <Ideologi /> },
  { path: "/baitul", element: <Baitul /> },
  { path: "/textbook", element: <TextBook /> },
  { path: "/alzajira", element: <Alzajira /> },
  { path: "/sahadat", element: <Sahadat /> },
  { path: "/blind", element: <Blind /> },
  { path: "/akaid", element: <ImanAkaid /> },
  { path: "/reform", element: <Reform /> },
  { path: "/modern", element: <Mordanisam /> },
  { path: "/servent", element: <Servent /> },
  { path: "/fault", element: <Fault /> },
  { path: "/afternews", element: <AfterNews /> },
  { path: "/dictator", element: <DictatorShip /> },
  { path: "/brave", element: <Brave /> },
  { path: "/hera", element: <Hera /> },
  { path: "/biography", element: <Biography /> },
  { path: "/gaza", element: <Gaza /> },
  { path: "/ruler", element: <Ruler /> },
  { path: "/akol", element: <Akol /> },
  { path: "/kota", element: <Kota /> },
  { path: "/iman", element: <Iman /> },
  { path: "/filistin", element: <Filistin /> },
  { path: "/kurbani", element: <Kurbani /> },
  { path: "/soriot", element: <Soriot /> },
  { path: "/son", element: <Son /> },
  { path: "/surahname", element: <SurahName /> },
  { path: "/questionans", element: <QuestionAns /> },
  { path: "/lekhok", element: <Lekhok /> },
  { path: "/poriciti", element: <Poriciti /> },
  { path: "/answer", element: <ApnarZiggasa /> },
  { path: "/student", element: <StudentSylebus /> },
  { path: "/question", element: <Question /> },
  { path: "/agent", element: <Agent /> },
  { path: "/connection", element: <Connection /> },
  { path: "/buttons", element: <ButtonsMore /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainRoutes,
  },
]);

export default router;
