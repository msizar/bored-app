"use client";

import { IChip } from "@/models";
import { FC } from "react";

type ChipProps = {
	title: string;
	active: boolean;
	onClick: () => void;
};

const Chips: FC<ChipProps> = ({ title, active, onClick }) => {
	const activeStyle = active ? "bg-sky-500" : "";
	return (
		<div
			className={`cursor-pointer ${activeStyle} hover:bg-sky-700 h-10 px-5 py-2 rounded border-solid border-2 border-sky-500 `}
			onClick={onClick}
		>
			<p>{title}</p>
		</div>
	);
};

type FilterChipsProps = {
	types: IChip[];
	filter: () => void;
};

const FilterChips: FC<FilterChipsProps> = ({ types, filter }) => {
	return (
		<div className="flex gap-3">
			<p className="m-2">Filter:</p>
			{types.map((type) => (
				<Chips
					key={type.title}
					title={type.title}
					active={type.active}
					onClick={filter}
				/>
			))}
		</div>
	);
};

export default FilterChips;
