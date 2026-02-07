import { Directory } from "./models/directory";
import { File } from "./models/file";

const movieDirectory = new Directory("moviefolder");
const movieFile = new File("Bahubali.mp4");


movieDirectory.add(movieFile);

const comedyMovies = new Directory("ComedyMovies");

movieDirectory.add(comedyMovies);

const comedyMovie = new File("Tropic Thunder");

comedyMovies.add(comedyMovie);

movieDirectory.ls();
