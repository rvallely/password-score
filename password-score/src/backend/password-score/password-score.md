## Password scores

With this mini project I intend to explore regular expressions and write a program which marks passwords out of 15 using the scores table below and provides further feedback on the specifics of the password. An object with the properties: score, length, letters, numbers, specials and capitalisation should always be returned.

## Password score criteria

Passwords are scored on 5 factors (length, ratio of letters:length, number of numbers, number of special characters, ratio of capitalised letters: total letters). Each factor is evaluated and given a mark out of 3. 

<strong>Length</strong>

<table>
    <tbody>
    <tr>
        <td><strong>Score</strong></td>
        <td><strong>Criteria</strong></td>
        <td><strong>Example</strong></td>
        </tr>
    <tr>
        <td>1 (total is returned here regardless of contents of password)</td>
        <td>Less than four characters</td>
        <td>a2c</td>
    </tr>
    <tr>
        <td>2 (total is returned here regardless of contents of password)</td>
        <td>Between 4 - 8 characters (inclusive)</td>
        <td>abc4d£f</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Between 9 - 12 characters (inclusive)</td>
        <td>abcdefghi</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Over 12 characters</td>
        <td>abcdefghijklmn</td>
    </tr>
    </tbody>
</table>

<strong>Letters</strong>

<table>
    <tbody>
    <tr>
        <td><strong>Score</strong></td>
        <td><strong>%letters of total length</strong></td>
        <td><strong>Example</strong></td>
        </tr>
    <tr>
        <td>1</td>
        <td>Over 85% letters</td>
        <td>abcdefghij1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Between 61% and 85% letters</td>
        <td>abcdefg234</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Below 61% letters</td>
        <td>abcde12345</td>
    </tr>
    </tbody>
</table>

<strong>Numbers</strong>

<table>
    <tbody>
    <tr>
        <td><strong>Score</strong></td>
        <td><strong>Number of numbers (0-9)</strong></td>
        <td><strong>Example</strong></td>
        </tr>
    <tr>
        <td>1</td>
        <td>1 number</td>
        <td>abcdefghi1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>2 or 3 numbers</td>
        <td>abcdefgh12</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Over 3 numbers</td>
        <td>abcdef1234</td>
    </tr>
    </tbody>
</table>

<strong>Special Characters (! @ £ # $ % ^ & *)</strong>

<table>
    <tbody>
    <tr>
        <td><strong>Score</strong></td>
        <td><strong>Number of special characters</strong></td>
        <td><strong>Example</strong></td>
        </tr>
    <tr>
        <td>1</td>
        <td>1 special character</td>
        <td>abcdefghi!</td>
    </tr>
    <tr>
        <td>2</td>
        <td>2 or 3 special characters</td>
        <td>abcdefgh!£*</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Over 3 special characters</td>
        <td>abcdefgh!£*^</td>
    </tr>
    </tbody>
</table>

<strong>Capitalisation</strong>

<table>
    <tbody>
    <tr>
        <td><strong>Score</strong></td>
        <td><strong>Number of capitalised letters</strong></td>
        <td><strong>Example</strong></td>
        </tr>
    <tr>
        <td>1</td>
        <td>1 or 2 capitalised letters</td>
        <td>ABcdefghij</td>
    </tr>
    <tr>
        <td>2</td>
        <td>3 or 4 capitalised letters</td>
        <td>ABCDefghij</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Over 4 capitalised letters</td>
        <td>ABCDEfghij</td>
    </tr>
    </tbody>
</table>

