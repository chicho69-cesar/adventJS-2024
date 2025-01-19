function decodeFilename(filename) {
	const regex = new RegExp(/(?!\d*_)(.*)(?=\..*)/)
	const matchExec = regex.exec(filename)
	return matchExec ? matchExec[0] : filename
}
