class Log {
	constructor() {
		this.messages = [];
	}
	add(message) {
		this.messages.push({ message });
	}
	[Symbol.iterator]() {
		return this.messages.values();
	}
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

for (let entry of log) {
	console.log(`${entry.message}`);
}
