import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import {
	fontFamilyOptions,
	OptionType,
	fontSizeOptions,
	fontColors,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handlerOpen = () => {
		setIsOpen(!isOpen);
	};

	const [selectedFontFamily, setSelectedFontFamily] = useState(
		fontFamilyOptions[0]
	);

	const [selectedFontSize, setSelectedFontSize] = useState(fontSizeOptions[0]);

	const handleFontFamilyChange = (option: OptionType) => {
		setSelectedFontFamily(option);
	};

	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		fontColors[0]
	);
	const handleFontColorChange = (option: OptionType) => {
		setSelectedBackgroundColor(option);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handlerOpen} />
			<aside
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
						onChange={setSelectedFontSize}
						name={'fontSize'}
						title={'Размер шрифта'}
					/>
					<Select
						options={fontColors}
						selected={selectedBackgroundColor}
						onChange={handleFontColorChange}
						title={'Цвет шрифта'}
					/>
					<Separator />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
