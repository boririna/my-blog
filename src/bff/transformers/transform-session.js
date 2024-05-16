export const transformSession = (dbSession) => ({
	id: dbSession.id,
	hash: dbSession.hash,
	user: dbSession.user,
});

// export const transformSession = function (dbSession) {
// 	if (dbSession) {
// 		return {
// 			id: dbSession.id,
// 			hash: dbSession.hash,
// 			user: dbSession.user,
// 		};
// 	} else {
// 		console.log('dbSession undefined');
// 	}
// };
