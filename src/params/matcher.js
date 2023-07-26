/* matching url slug using Matcher & regex  [[slug=matcher]] which in this instance uses matcher.js file in src dir -- lowercase a-z and 0-9  and - allowed here
--> folder/file names are arbitry*/

export const match = (param) => {
	return /^[a-z0-9-]+$/.test(param);
};
