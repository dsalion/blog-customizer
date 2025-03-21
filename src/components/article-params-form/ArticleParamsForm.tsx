import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Text } from 'src/ui/text';
import {
	fontFamilyOptions,
	OptionType,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import type { ArticleStateType } from 'src/constants/articleProps';
type props = {
	getpreferences: (data: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ getpreferences }: props) => {
	const [isOpen, setIsOpen] = useState(false);
	const formRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);
	const handlerOpen = () => {
		setIsOpen(!isOpen);
	};

	const [selectedFontFamily, setSelectedFontFamily] = useState(
		fontFamilyOptions[0]
	);

	const handleFontFamilyChange = (option: OptionType) => {
		setSelectedFontFamily(option);
	};

	const [selectedFontSize, setSelectedFontSize] = useState(fontSizeOptions[0]);

	const handleFontSizeChange = (option: OptionType) => {
		setSelectedFontSize(option);
	};

	const [selectedFontColor, setSelectedFontColor] = useState(fontColors[0]);
	const handleFontColorChange = (option: OptionType) => {
		setSelectedFontColor(option);
	};

	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		backgroundColors[0]
	);
	const handleBackgroundColorChange = (option: OptionType) => {
		setSelectedBackgroundColor(option);
	};

	const [selectedContentWidth, setSelectedCOntentWidth] = useState(
		contentWidthArr[0]
	);
	const handleContentWidthChange = (option: OptionType) => {
		setSelectedCOntentWidth(option);
	};

	const sendPreferences = () => {
		event?.preventDefault();
		getpreferences({
			fontFamilyOption: selectedFontFamily,
			fontSizeOption: selectedFontSize,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedContentWidth,
		});
	};
	const resetPreferences = () => {
		getpreferences(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handlerOpen} />
			<aside
				ref={formRef}
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={selectedFontFamily}
						onChange={handleFontFamilyChange}
						title='Шрифт'
					/>
					<RadioGroup
						options={fontSizeOptions}
						selected={selectedFontSize}
						onChange={handleFontSizeChange}
						name={'fontSize'}
						title={'Размер шрифта'}
					/>
					<Select
						options={fontColors}
						selected={selectedFontColor}
						onChange={handleFontColorChange}
						title={'Цвет шрифта'}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={selectedBackgroundColor}
						onChange={handleBackgroundColorChange}
						title={'Цвет фона'}
					/>
					<Select
						options={contentWidthArr}
						selected={selectedContentWidth}
						onChange={handleContentWidthChange}
						title={'Ширина контента'}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={resetPreferences}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={sendPreferences}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
